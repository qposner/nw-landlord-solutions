import { useState, useMemo, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { blogPosts as staticBlogPosts } from "@/lib/siteData";
import { PageHero } from "@/components/SharedSections";
import { useSEO } from "@/hooks/useSEO";
import { seoData } from "@/lib/seoData";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. Blog cards are an index of operational legal topics without sidebars or editorial clutter.
*/
export default function Blog() {
  useSEO(seoData.blog);
  const [displayMode, setDisplayMode] = useState<"grid" | "article">("grid");
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  // Fetch database blog posts
  const { data: dbPosts = [] } = trpc.blog.getAll.useQuery();

  // Combine database posts with static LinkedIn posts
  const allPosts = useMemo(() => {
    const combined = [
      ...dbPosts.map((post) => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : new Date().toLocaleDateString(),
        read: post.readTime || "5 min read",
        image: post.imageUrl || "https://via.placeholder.com/400x250?text=Blog+Post",
        url: post.linkedInUrl || "#",
        content: post.content,
        htmlContent: post.htmlContent,
        isDatabase: true,
      })),
      ...staticBlogPosts,
    ];
    return combined.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [dbPosts]);

  const categories = ["All", ...Array.from(new Set(allPosts.map((post) => post.category)))];
  const [active, setActive] = useState("All");
  const posts = useMemo(() => active === "All" ? allPosts : allPosts.filter((post) => post.category === active), [active, allPosts]);

  if (displayMode === "article" && selectedArticle) {
    return (
      <>
        <section className="section-pad">
          <div className="container">
            <button
              onClick={() => {
                setDisplayMode("grid");
                setSelectedArticle(null);
              }}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              ← Back to Blog
            </button>
            <article className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">{selectedArticle.title}</h1>
              <div className="flex gap-4 mb-8 text-sm text-gray-600">
                <span>{selectedArticle.category}</span>
                <span>{selectedArticle.date}</span>
                <span>{selectedArticle.read}</span>
              </div>
              {selectedArticle.image && (
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full rounded-lg mb-8" />
              )}
              <div className="prose prose-invert max-w-none">
                <Streamdown>{selectedArticle.content || selectedArticle.htmlContent}</Streamdown>
              </div>
            </article>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero kicker="Blog" title="Eviction law topics for property management operations." text="Placeholder index for procedural notes, Washington landlord-side updates, and operational guidance. No sidebars. No consumer-law content." />
      <section className="section-pad">
        <div className="container">
          <div className="filter-bar" aria-label="Blog categories">
            {categories.map((category) => (
              <button key={category} className={active === category ? "filter-chip filter-chip-active" : "filter-chip"} onClick={() => setActive(category)}>{category}</button>
            ))}
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.id || post.title}>
                {post.isDatabase ? (
                  <>
                    <button
                      className="blog-thumb"
                      onClick={() => {
                        setSelectedArticle(post);
                        setDisplayMode("article");
                      }}
                      aria-label={post.title}
                    >
                      <img src={post.image} alt="" />
                    </button>
                    <div className="blog-meta"><span>{post.category}</span><span>{post.read}</span></div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <span>{post.date}</span>
                      <button
                        className="card-link"
                        onClick={() => {
                          setSelectedArticle(post);
                          setDisplayMode("article");
                        }}
                      >
                        Read Article <ArrowRight size={16} />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <a className="blog-thumb" href={post.url} target="_blank" rel="noreferrer" aria-label={post.title}>
                      <img src={post.image} alt="" />
                    </a>
                    <div className="blog-meta"><span>{post.category}</span><span>{post.read}</span></div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-footer"><span>{post.date}</span><a className="card-link" href={post.url} target="_blank" rel="noreferrer">Read on LinkedIn <ArrowRight size={16} /></a></div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
