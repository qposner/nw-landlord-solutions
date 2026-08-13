import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/SharedSections";
import { useSEO } from "@/hooks/useSEO";
import { blogPosts as dbPosts } from "@/lib/blogData";
import { useLocation, useParams } from "wouter";
import { getBlogPostSchema } from "@/lib/seoData";

interface CategoryConfig {
  slug: string;
  title: string;
  description: string;
  heroText: string;
  seoDescription: string;
}

const categoryConfigs: Record<string, CategoryConfig> = {
  "legal-compliance": {
    slug: "legal-compliance",
    title: "Legal Compliance",
    description: "Essential guides on Washington eviction law compliance, notice requirements, and regulatory updates.",
    heroText: "Legal Compliance for Washington Landlords",
    seoDescription: "Expert legal compliance articles for Washington state landlords, covering eviction procedures, statutory requirements, and landlord-tenant law.",
  },
  "operational-excellence": {
    slug: "operational-excellence",
    title: "Operational Excellence",
    description: "Best practices for property management operations, technology integration, and workflow optimization.",
    heroText: "Operational Excellence in Property Management",
    seoDescription: "Operational best practices for property management companies, including technology, workflow, and process optimization.",
  },
};

export default function BlogCategory() {
  const params = useParams<{ category?: string; slug?: string }>();
  const category = params.category ?? params.slug;
  const [, navigate] = useLocation();

  const config = category ? categoryConfigs[category] : null;

  // Filter statically bundled posts by category
  const categoryPosts = useMemo(() => {
    if (!config) return [];

    return dbPosts
      .filter((post) => post.category === config.title)
      .map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        date: post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : new Date().toLocaleDateString(),
        read: post.readTime || "5 min read",
        image: post.imageUrl || "https://via.placeholder.com/400x250?text=Blog+Post",
        url: `/blog/${post.slug}`,
        publishedAt: post.publishedAt,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [dbPosts, config]);

  // Set SEO metadata for category page
  useSEO(
    config
      ? {
          title: `${config.title} | NW Landlord Solutions Blog`,
          description: config.seoDescription,
          canonical: `/blog/${category}`,
          type: "website",
        }
      : undefined
  );

  if (!config) {
    return (
      <div className="section-pad">
        <div className="container">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-400 mb-6">The category you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate("/blog")}
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        kicker={config.title}
        title={config.heroText}
        text={config.description}
      />
      <section className="section-pad">
        <div className="container">
          {categoryPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-6">No articles in this category yet.</p>
              <button
                onClick={() => navigate("/blog")}
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Back to All Articles
              </button>
            </div>
          ) : (
            <>
              <div className="blog-grid">
                {categoryPosts.map((post) => (
                  <article className="blog-card" key={post.id || post.title}>
                    <button
                      className="blog-thumb"
                      onClick={() => navigate(post.url)}
                      aria-label={post.title}
                    >
                      <img src={post.image} alt="" />
                    </button>
                    <div className="blog-meta">
                      <span>{post.category}</span>
                      <span>{post.read}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <span>{post.date}</span>
                      <button
                        className="card-link"
                        onClick={() => navigate(post.url)}
                      >
                        Read Article <ArrowRight size={16} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Back to blog CTA */}
              <div className="border-t border-gray-700 pt-12 mt-12">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Explore More Topics</h3>
                  <button
                    onClick={() => navigate("/blog")}
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Back to All Articles
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
