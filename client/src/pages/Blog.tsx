import { useState, useMemo } from "react";
import { ArrowRight, Search } from "lucide-react";
import { blogPosts as staticBlogPosts } from "@/lib/siteData";
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
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch database blog posts
  const { data: dbPosts = [] } = trpc.blog.getAll.useQuery();

  // Combine database posts with static LinkedIn posts
  const allPosts = useMemo(() => {
    const combined = [
      ...dbPosts.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : new Date().toLocaleDateString(),
        read: post.readTime || "5 min read",
        image: post.imageUrl || "https://via.placeholder.com/400x250?text=Blog+Post",
        url: `/blog/${post.slug}`,
        linkedInUrl: post.linkedInUrl,
        isDatabase: true,
      })),
      ...staticBlogPosts,
    ];
    return combined.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [dbPosts]);

  const categories = ["All", ...Array.from(new Set(allPosts.map((post) => post.category)))];
  const [active, setActive] = useState("All");
  
  // Filter by category and search query
  const posts = useMemo(() => {
    let filtered = active === "All" ? allPosts : allPosts.filter((post) => post.category === active);
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) => post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query));
    }
    return filtered;
  }, [active, allPosts, searchQuery]);

  return (
    <>
      <PageHero kicker="Blog" title="Eviction law topics for property management operations." text="Placeholder index for procedural notes, Washington landlord-side updates, and operational guidance. No sidebars. No consumer-law content." />
      <section className="section-pad">
        <div className="container">
          {/* Search bar */}
          <div className="mb-8 flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-2 border border-gray-700">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
            />
          </div>
          
          {/* Category filter */}
          <div className="filter-bar" aria-label="Blog categories">
            {categories.map((category) => (
              <button key={category} className={active === category ? "filter-chip filter-chip-active" : "filter-chip"} onClick={() => setActive(category)}>{category}</button>
            ))}
          </div>
          {/* Results count */}
          {searchQuery && (
            <div className="mb-6 text-sm text-gray-400">
              Found {posts.length} article{posts.length !== 1 ? "s" : ""} matching "{searchQuery}"
            </div>
          )}
          
          {/* No results message */}
          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No articles found{searchQuery ? " matching your search" : ""}.</p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
          
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.id || post.title}>
                {post.isDatabase ? (
                  <>
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
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => navigate(`/blog/category/${encodeURIComponent(post.category)}`)}
                          className="text-xs font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          View category
                        </button>
                        <button
                          className="card-link"
                          onClick={() => navigate(post.url)}
                        >
                          Read Article <ArrowRight size={16} />
                        </button>
                      </div>
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
