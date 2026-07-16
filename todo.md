# TODO

- [x] Adjust only the typography hierarchy inside the four homepage pain point blocks.
- [x] Make the problem headline the largest and most visually dominant text in each block.
- [x] Make the solution line medium-sized and secondary to the problem headline.
- [x] Keep supporting/detail text smallest and muted gray where applicable.
- [x] Preserve the existing card content, layout, and four-across grid.
- [x] Validate TypeScript and production build, then save a new checkpoint.

## Blog Article Migrations (Oregon Content)

- [x] Create blog article: "Understanding the Oregon Eviction Process for Landlords" (slug: understanding-oregon-eviction-process)
- [x] Create blog article: "Tech-Enabled Eviction Management: Preparing for Oregon Expansion" (slug: tech-enabled-eviction-management-oregon)
- [x] Update sitemap.xml to include all 10 URLs (homepage, main pages, blog articles, service areas)
- [x] Verify Washington-only active framing on all new Oregon content
- [x] Test dynamic routing for both new blog articles

## New Article: The True Cost of Eviction Delay

- [x] Insert "The True Cost of Eviction Delay" article into blog_posts database
- [x] Verify article renders correctly on blog listing and detail pages
- [x] Verify Related Articles component correctly identifies it as a Washington post
- [x] Confirm hero image displays properly

## SEO & Author Authority (High Priority)

- [x] Update sitemap.xml to include /blog/true-cost-eviction-delay
- [x] Implement JSON-LD author markup for Quinn Posner across all blog posts (E-E-A-T strategy)
- [x] Verify new article has no LinkedIn references and proper Related Articles linking

## Blog Category Pages (High Priority - Topical Map Strategy)

- [x] Build /blog/legal-compliance category page with filtered articles
- [x] Build /blog/operational-excellence category page with filtered articles
- [x] Implement geographic filtering on category pages (Southwest WA focus)
- [x] Add category page schema and metadata for SEO
- [x] Verify no LinkedIn references on category pages
- [x] Test category page links from blog listing

## Author Bio Card (High Priority - Lead Generation)

- [x] Create AuthorBioCard component with Quinn Posner credentials
- [x] Add "Contact for Consultation" CTA button
- [x] Integrate author card into blog post pages (below content)
- [x] Style author card to match brand design
- [x] Verify author card renders on all blog posts

## BUG: Flood Disclosure Article Disappears (BLOCKING)

- [x] Verify flood disclosure article exists in database
- [x] Check blog post query logic for filtering issues
- [x] Examine browser console logs for errors
- [x] Fix the disappearing article issue (date handling in Blog.tsx)
- [x] Test article persistence on blog page and detail page

## Service Area Business (SAB) Model Transition (High Priority)

- [x] Audit current footer for old physical address (532 NE 3rd Ave)
- [x] Audit current schema for conflicting address data
- [x] Update Footer component with P.O. Box mailing address
- [x] Add JSON-LD SAB schema to Home.tsx
- [x] Remove old physical address schema
- [ ] Test with Google Rich Results Test
- [ ] Verify on live website
- [ ] Update Google Business Profile to SAB model
- [ ] Submit sitemap to Google Search Console
