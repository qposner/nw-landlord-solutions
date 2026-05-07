import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/siteData";
import { PageHero } from "@/components/SharedSections";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. Blog cards are an index of operational legal topics without sidebars or editorial clutter.
*/
export default function Blog() {
  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  const [active, setActive] = useState("All");
  const posts = useMemo(() => active === "All" ? blogPosts : blogPosts.filter((post) => post.category === active), [active]);

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
              <article className="blog-card" key={post.title}>
                <a className="blog-thumb" href={post.url} target="_blank" rel="noreferrer" aria-label={post.title}>
                  <img src={post.image} alt="" />
                </a>
                <div className="blog-meta"><span>{post.category}</span><span>{post.read}</span></div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-card-footer"><span>{post.date}</span><a className="card-link" href={post.url} target="_blank" rel="noreferrer">Read on LinkedIn <ArrowRight size={16} /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
