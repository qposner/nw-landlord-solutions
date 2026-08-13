import { useParams, useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogData";
import { Streamdown } from "streamdown";
import { getBlogPostSchema } from "@/lib/seoData";
import { AuthorBioCard } from "@/components/AuthorBioCard";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();

  // Look up post from statically bundled data
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const allPosts = blogPosts;

  // Get related articles based on geographic logic (Oregon -> Oregon, Washington -> Washington)
  const getRelatedArticles = () => {
    if (!post) return [];

    // Determine if the current article is Oregon or Washington focused
    // Check title for Oregon keyword (more reliable than content which may have many mentions)
    const isOregonPost = post.title.toLowerCase().includes('oregon');

    // Filter related articles by geography
    const related = allPosts.filter(p => {
      if (p.id === post.id) return false; // Exclude current article

      const pIsOregon = p.title.toLowerCase().includes('oregon');

      // Match geography: Oregon posts link to Oregon, Washington to Washington
      return isOregonPost === pIsOregon;
    });

    // Return up to 3 related articles
    return related.slice(0, 3);
  };

  const relatedArticles = getRelatedArticles();

  // Set SEO metadata for the blog post with JSON-LD author schema
  useSEO(
    post ? {
      title: post.title,
      description: post.excerpt,
      canonical: `/blog/${post.slug}`,
      ogImage: post.imageUrl,
      type: "article",
      publishedTime: post.publishedAt,
      schema: getBlogPostSchema({
        title: post.title,
        excerpt: post.excerpt,
        date: post.publishedAt?.toISOString() || new Date().toISOString(),
        url: `https://waevictions.com/blog/${post.slug}`,
        image: post.imageUrl ?? undefined,
      }),
    } : undefined
  );

  if (!post) {
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
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
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
    <article className="min-h-screen">
      <div className="section-pad">
        <div className="container max-w-3xl">
          {/* Back button */}
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </button>

          {/* Article header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {post.category}
              </span>
              <span className="text-xs text-gray-500">
                {post.readTime || "5 min read"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time dateTime={post.publishedAt?.toISOString()}>
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </time>
            </div>
          </header>

          {/* Featured image */}
          {post.imageUrl && (
            <figure className="mb-12">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full rounded-lg"
              />
            </figure>
          )}

          {/* Article excerpt */}
          <div className="mb-12 text-lg text-gray-300 leading-relaxed">
            {post.excerpt}
          </div>

          {/* Article content */}
          <div className="prose prose-invert max-w-none mb-16">
            <Streamdown>{post.content || post.htmlContent || ""}</Streamdown>
          </div>

          {/* Author Bio Card */}
          <AuthorBioCard />

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="border-t border-gray-700 pt-12 mt-12 mb-12">
              <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <button
                    key={related.id}
                    onClick={() => navigate(`/blog/${related.slug}`)}
                    className="text-left p-4 border border-gray-700 rounded-lg hover:border-blue-600 hover:bg-gray-900/50 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {related.category}
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-2 hover:text-blue-400 transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Back to blog CTA */}
          <div className="border-t border-gray-700 pt-12 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">More from our blog</h3>
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
    </article>
  );
}
