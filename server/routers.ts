import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createBlogPost, getAllBlogPosts, getBlogPostBySlug } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  blog: router({
    // Webhook endpoint for Search Atlas CMS Connector
    publishFromSearchAtlas: publicProcedure
      .input(z.object({
        title: z.string(),
        slug: z.string(),
        category: z.string(),
        excerpt: z.string(),
        content: z.string(),
        htmlContent: z.string().optional(),
        imageUrl: z.string().optional(),
        linkedInUrl: z.string().optional(),
        readTime: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          const post = await createBlogPost({
            title: input.title,
            slug: input.slug,
            category: input.category,
            excerpt: input.excerpt,
            content: input.content,
            htmlContent: input.htmlContent,
            imageUrl: input.imageUrl,
            linkedInUrl: input.linkedInUrl,
            readTime: input.readTime,
            publishedAt: new Date(),
          });
          return { success: !!post, post };
        } catch (error) {
          console.error("[Blog] Failed to publish from Search Atlas:", error);
          throw error;
        }
      }),
    
    // Get all blog posts
    getAll: publicProcedure.query(async () => {
      return await getAllBlogPosts();
    }),
    
    // Get blog post by slug
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return await getBlogPostBySlug(input.slug);
      }),
  }),
});

export type AppRouter = typeof appRouter;
