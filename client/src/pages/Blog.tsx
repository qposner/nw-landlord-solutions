import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/SharedSections";
import { useSEO } from "@/hooks/useSEO";
import { seoData } from "@/lib/seoData";
import { blogPosts as dbPosts } from "@/lib/blogData";
import { useLocation } from "wouter";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. Blog cards are an index of operational legal topics without sidebars or editorial clutter.
*/
export default function Blog() {
  useSEO(seoData.blog);
  const [, navigate] = useLocation();

  // Use statically bundled posts
  const allPosts = useMemo(() => {
    return dbPosts
      .map((post) => {
        // Handle publishedAt as either Date object or string
        const publishDate = post.publishedAt instanceof Date 
          ? post.publishedAt 
          : new Date(post.publishedAt || new Date());
        
        return {
          id: post.id,
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          category: post.category,
          date: publishDate.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
          publishTime: publishDate.getTime(),
          read: post.readTime || "5 min read",
          image: post.imageUrl || "https://via.placeholder.com/400x250?text=Blog+Post",
          url: `/blog/${post.slug}`,
        };
      })
      .sort((a, b) => b.publishTime - a.publishTime);
  }, [dbPosts]);

  const categories = ["All", ...Array.from(new Set(allPosts.map((post) => post.category)))];
  const [active, setActive] = useState("All");
  const posts = useMemo(() => active === "All" ? allPosts : allPosts.filter((post) => post.category === active), [active, allPosts]);

  return (
    <>
      <PageHero kicker="Blog" title="Eviction law topics for property management operations." text="Placeholder index for procedural notes, Washington landlord-side updates, and operational guidance. No sidebars. No consumer-law content." />
      <section className="section-pad">
        <div className="container">
          <div className="filter-bar" aria-label="Blog categories">
            {categories.map((category) => {
              if (category === "All") {
                return (
                  <button
                    key={category}
                    className={active === category ? "filter-chip filter-chip-active" : "filter-chip"}
                    onClick={() => setActive(category)}
                  >
                    {category}
                  </button>
                );
              }
              const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
              return (
                <button
                  key={category}
                  className={active === category ? "filter-chip filter-chip-active" : "filter-chip"}
                  onClick={() => {
                    setActive(category);
                    navigate(`/blog/${categorySlug}`);
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.id || post.title}>
                <button
                  className="blog-thumb"
                  onClick={() => navigate(post.url)}
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
                    onClick={() => navigate(post.url)}
                  >
                    Read Article <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
