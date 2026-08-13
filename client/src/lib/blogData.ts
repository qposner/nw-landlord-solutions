import rawPosts from "./blogPosts.json";
import { withBase } from "./base";

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string | null;
  htmlContent: string | null;
  imageUrl: string | null;
  linkedInUrl: string | null;
  readTime: string | null;
  publishedAt: Date | null;
};

export const blogPosts: BlogPost[] = (rawPosts as Array<Omit<BlogPost, "publishedAt"> & { publishedAt: string | null }>).map(
  (post) => ({
    ...post,
    imageUrl: post.imageUrl ? withBase(post.imageUrl) : null,
    publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
  })
);

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
