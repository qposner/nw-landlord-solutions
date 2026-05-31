import { useParams, useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();

  // Fetch blog post from database
  const { data: post, isLoading, error } = trpc.blog.getBySlug.useQuery(
    { slug: slug || "" },
    { enabled: !!slug }
  );

  // Set SEO metadata for the blog post
  useSEO(
    post ? {
      title: post.title,
      description: post.excerpt,
      canonical: `/blog/${post.slug}`,
      ogImage: post.imageUrl,
      type: "article",
      publishedTime: post.publishedAt,
    } : undefined
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

  if (error || !post) {
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
            <Streamdown>{post.content || post.htmlContent}</Streamdown>
          </div>



          {/* Related articles or CTA */}
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
