import { useParams, useLocation } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { trpc } from "@/lib/trpc";
import { useMemo } from "react";

export default function BlogCategory() {
  const { category } = useParams<{ category: string }>();
  const [, navigate] = useLocation();

  // Fetch all blog posts
  const { data: allPosts = [], isLoading } = trpc.blog.getAll.useQuery();

  // Filter posts by category
  const posts = useMemo(() => {
    if (!category) return [];
    const decodedCategory = decodeURIComponent(category);
    return allPosts
      .filter((post) => post.category === decodedCategory)
      .sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      });
  }, [category, allPosts]);

  // Set SEO metadata
  useSEO(
    category
      ? {
          title: `${decodeURIComponent(category)} | Blog | NW Landlord Solutions`,
          description: `Articles about ${decodeURIComponent(category).toLowerCase()} for Washington landlords and property managers.`,
          canonical: `/blog/category/${category}`,
          type: "website",
        }
      : undefined
  );

  if (isLoading) {
    return (
      <div className="section-pad">
        <div className="container">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-96 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!category || posts.length === 0) {
    return (
      <div className="section-pad">
        <div className="container">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </button>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-400 mb-6">No articles found in this category.</p>
            <button
              onClick={() => navigate("/blog")}
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Return to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="section-pad">
        <div className="container max-w-4xl">
          {/* Back button */}
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </button>

          {/* Category header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {decodeURIComponent(category)}
            </h1>
            <p className="text-lg text-gray-300">
              {posts.length} article{posts.length !== 1 ? "s" : ""} in this category
            </p>
          </header>

          {/* Articles grid */}
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="border-b border-gray-700 pb-8 last:border-b-0"
              >
                <div className="flex items-start gap-6">
                  {post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime || "5 min read"}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 hover:text-blue-400 transition-colors">
                      <button
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="text-left hover:text-blue-400 transition-colors"
                      >
                        {post.title}
                      </button>
                    </h2>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <time className="text-sm text-gray-500">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : ""}
                      </time>
                      <button
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        Read Article <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Back to blog CTA */}
          <div className="border-t border-gray-700 pt-12 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Browse all categories</h3>
              <button
                onClick={() => navigate("/blog")}
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Back to All Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
