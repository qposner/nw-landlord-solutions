import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/SharedSections";
import { useSEO } from "@/hooks/useSEO";
import { seoData } from "@/lib/seoData";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. Blog cards are an index of operational legal topics without sidebars or editorial clutter.
*/
export default function Blog() {
  useSEO(seoData.blog);
  const [, navigate] = useLocation();

  // Fetch database blog posts
  const { data: dbPosts = [] } = trpc.blog.getAll.useQuery();

  // Use only database posts
  const allPosts = useMemo(() => {
    return dbPosts
      .map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : new Date().toLocaleDateString(),
        read: post.readTime || "5 min read",
        image: post.imageUrl || "https://via.placeholder.com/400x250?text=Blog+Post",
        url: `/blog/${post.slug}`,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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
            {categories.map((category) => (
              <button key={category} className={active === category ? "filter-chip filter-chip-active" : "filter-chip"} onClick={() => setActive(category)}>{category}</button>
            ))}
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
