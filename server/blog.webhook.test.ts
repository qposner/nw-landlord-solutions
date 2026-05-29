import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("blog.publishFromSearchAtlas", () => {
  it("accepts valid blog post payload from Search Atlas", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const payload = {
      title: "Test Blog Post",
      slug: "test-blog-post",
      category: "Jurisdiction",
      excerpt: "This is a test blog post excerpt",
      content: "This is the full content of the test blog post",
      htmlContent: "<p>This is the full content of the test blog post</p>",
      imageUrl: "https://example.com/image.jpg",
      linkedInUrl: "https://linkedin.com/pulse/test",
      readTime: "5 min read",
    };

    const result = await caller.blog.publishFromSearchAtlas(payload);

    expect(result.success).toBe(true);
    expect(result.post).toBeDefined();
    expect(result.post?.title).toBe(payload.title);
    expect(result.post?.slug).toBe(payload.slug);
    expect(result.post?.category).toBe(payload.category);
  });

  it("rejects invalid payload (missing required fields)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const invalidPayload = {
      title: "Test",
      // Missing required fields: slug, category, excerpt, content
    };

    try {
      await caller.blog.publishFromSearchAtlas(invalidPayload as any);
      expect.fail("Should have thrown validation error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("retrieves all blog posts", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const posts = await caller.blog.getAll();

    expect(Array.isArray(posts)).toBe(true);
  });
});
