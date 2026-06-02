# NWLS Website Project Instructions

**Project:** NW Landlord Solutions Website  
**URL:** https://waevictions.com  
**Tech Stack:** React 19 + Tailwind 4 + Express 4 + tRPC 11 + MySQL  
**Status:** Production (Blog, Platform, Services, About, Contact pages live)

---

## 1. Design System & Brand Guidelines

### Brand Identity
- **Company:** NW Landlord Solutions (NWLS)
- **Focus:** Landlord-side eviction representation and operational legal strategy for Washington State
- **Design Philosophy:** Swiss International Typographic Style translated into a dark enterprise SaaS command center
- **Target Audience:** Property management companies, portfolio landlords, and enterprise PM firms managing 50+ units

### Color Palette (OKLCH Format)
All colors are defined in `client/src/index.css` using OKLCH color space for better perceptual consistency.

| Color | OKLCH | Hex | Usage |
|-------|-------|-----|-------|
| **Primary** | `oklch(0.55 0.22 263)` | `#2563EB` | Buttons, accents, interactive elements, brand signals |
| **Primary Foreground** | `oklch(1 0 0)` | `#FFFFFF` | Text on primary buttons |
| **Background** | `oklch(0.16 0.035 263)` | `#0A0F1E` | Deep navy page background |
| **Foreground** | `oklch(0.98 0 0)` | `#F7F7F7` | Primary text (near white) |
| **Card** | `oklch(0.19 0.036 263)` | `#131B2E` | Card/panel backgrounds |
| **Accent** | `oklch(0.55 0.22 263)` | `#60A5FA` | Labels, highlights, secondary signals |
| **Muted Foreground** | — | `#E2E8F0` | Secondary text, descriptions |
| **Destructive** | `oklch(0.64 0.22 25)` | `#DC2626` | Error states, warnings |
| **Border** | `oklch(1 0 0 / 11%)` | — | Subtle borders (11% opacity white) |

### Typography
- **Headings (h1, h2, h3):** Space Grotesk (sans-serif)
  - Letter-spacing: -0.045em (tight)
  - Sizes: h1 clamp(3rem, 7vw, 6rem), h2 clamp(2rem, 4.8vw, 4.25rem)
- **Body Text:** IBM Plex Sans (sans-serif)
  - Font-family fallback: system-ui
  - Default size: 1rem
  - Line-height: 1.75 (body copy), 1.65 (cards)
- **Monospace (labels, code):** IBM Plex Mono
  - Used for eyebrow text, card labels, timestamps

### Spacing & Radius
- **Border Radius:** 0.65rem (base), with variants: sm (-4px), md (-2px), lg (base), xl (+4px)
- **Section Padding:** clamp(4.5rem, 9vw, 8rem) (responsive)
- **Gap/Margin:** Consistent 1rem base, scales with clamp() for responsive design

### Component Styling Patterns
All components use Tailwind utilities with semantic color tokens:
```css
/* Cards use this pattern */
border: 1px solid rgba(255,255,255,.11);
background: linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.025));
box-shadow: 0 24px 90px rgba(0,0,0,.28);
backdrop-filter: blur(18px);

/* Hover states */
transform: translateY(-3px);
border-color: rgba(37,99,235,.55);
background: linear-gradient(180deg, rgba(37,99,235,.12), rgba(255,255,255,.035));
```

---

## 2. Content Strategy & Blog Architecture

### Blog Overview
- **Total Articles:** 12 (as of June 2, 2026)
- **Geographic Focus:** Washington State (Southwest WA emphasis)
- **Author:** Quinn Posner, Principal Attorney
- **Update Frequency:** Ongoing (new articles added as needed)

### Blog Categories
| Category | Article Count | Purpose | SEO Focus |
|----------|----------------|---------|-----------|
| **Legal Compliance** | 5 | Statutory requirements, notice drafting, procedural compliance | Washington eviction law, RCW compliance |
| **Operational Excellence** | 3 | Process optimization, technology, efficiency for PM firms | Eviction management best practices |
| **Technology** | 2 | Software, automation, data management | Legal tech, PM software |
| **Jurisdiction** | 1 | County-specific variations | King County, Clark County variations |
| **Property Management** | 1 | Portfolio management, financial analysis | PM operations, cost analysis |

### Blog Articles (Current Inventory)

**Legal Compliance (5 articles)**
1. The 14-Day Pay or Vacate Notice: A Compliance Checklist Before the Rules Change Again
2. Right to Counsel: What Landlords Need to Know About Opposing Funded Attorneys
3. City-Specific Ordinance Landmines: Seattle, Tacoma, and Beyond
4. The 2026 Rent Cap: What 9.683% Actually Means for Your Portfolio
5. The Certified Mail Fix Is Here: What HB 2664 Means for Your Eviction Notices

**Operational Excellence (3 articles)**
1. Submit an Eviction at 9 PM. We'll Have It Open by Morning.
2. Managing Evictions Across Three Southwest Washington Counties: What PM Companies Get Wrong
3. Why Your Eviction Firm Should Feel Like a Software Company

**Technology (2 articles)**
1. Tech-Enabled Eviction Management: Preparing for Oregon Expansion
2. (One additional tech-focused article)

**Jurisdiction (1 article)**
1. Understanding the Oregon Eviction Process for Landlords

**Property Management (1 article)**
1. The True Cost of Eviction Delay: A Data-Driven Look at Lost Revenue

### Blog Database Schema
```typescript
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  category: varchar("category", { length: 100 }).notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  htmlContent: text("htmlContent"),
  imageUrl: text("imageUrl"),
  linkedInUrl: text("linkedInUrl"),
  readTime: varchar("readTime", { length: 50 }),
  publishedAt: timestamp("publishedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
```

### Content Guidelines

**Geographic Focus Rule**
- All blog content is Washington-focused by default
- Oregon content exists only as future expansion placeholder
- Related Articles component filters by state: if article title contains "oregon", show Oregon-related articles; otherwise show Washington articles
- This maintains topical cohesion and prevents mixed-state confusion

**LinkedIn Compliance**
- **NO LinkedIn references** in blog content, UI, or metadata
- All content is owned by waevictions.com
- LinkedIn URLs field exists in schema but is NOT displayed in UI
- Content migrated from LinkedIn must be fully transferred to site and LinkedIn originals removed

**Author Authority (E-E-A-T)**
- All blog posts include Quinn Posner as author
- JSON-LD `BlogPosting` schema includes author markup:
  ```json
  "author": {
    "@type": "Person",
    "name": "Quinn Posner",
    "url": "https://waevictions.com/about"
  }
  ```
- Author bio card displays on every blog post with credentials and consultation CTA

### Blog Pages & Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/blog` | Blog.tsx | Main blog listing with category filters |
| `/blog/:slug` | BlogPost.tsx | Individual article detail page |
| `/blog/legal-compliance` | BlogCategory.tsx | Category archive (5 articles) |
| `/blog/operational-excellence` | BlogCategory.tsx | Category archive (3 articles) |

### SEO Implementation

**Sitemap**
- Location: `client/public/sitemap.xml`
- Includes: Homepage, main pages, all blog articles, category pages
- Priority levels: 0.8 for categories, 0.7 for Washington articles, 0.6 for Oregon articles
- Updated whenever new articles are added

**Schema Markup**
- BlogPosting schema on every article (includes author, publisher, datePublished)
- CollectionPage schema on category pages (signals curated content collections)
- Organization schema on homepage

**Meta Tags**
- Title: Article title + "| NW Landlord Solutions"
- Description: Article excerpt (140-160 chars)
- OG tags for social sharing

---

## 3. Technical Architecture

### Project Structure
```
client/
  public/              ← Static files (favicon, robots.txt, sitemap.xml)
  src/
    pages/             ← Page components (Home, Blog, BlogPost, BlogCategory, etc.)
    components/        ← Reusable UI components (AuthorBioCard, DashboardLayout, etc.)
    lib/               ← Utilities (tRPC client, SEO helpers)
    contexts/          ← React contexts (ThemeContext)
    hooks/             ← Custom hooks (useAuth, useSEO)
    _core/             ← Core utilities (useAuth hook)
    index.css          ← Global styles + design tokens
    App.tsx            ← Routes & layout
    main.tsx           ← React providers

server/
  routers.ts           ← tRPC procedures (public & protected)
  db.ts                ← Database query helpers
  storage.ts           ← S3 file storage helpers
  _core/               ← Framework infrastructure (OAuth, context, LLM, etc.)

drizzle/
  schema.ts            ← Database table definitions
  migrations/          ← Database migration history
  relations.ts         ← Table relationships

shared/
  types.ts             ← Shared TypeScript types
  const.ts             ← Shared constants
```

### Database
- **Type:** MySQL/TiDB
- **ORM:** Drizzle ORM
- **Migrations:** `pnpm db:push` (generates + migrates)
- **Tables:** `users`, `blog_posts`

### Authentication
- **Method:** Manus OAuth 2.0
- **Flow:** `/api/oauth/callback` → session cookie
- **Context:** Available as `ctx.user` in tRPC procedures
- **Frontend:** `useAuth()` hook for login state, `getLoginUrl()` for redirect

### API Layer
- **Framework:** tRPC 11 (end-to-end type safety)
- **Endpoint:** `/api/trpc`
- **Procedures:** Split into public and protected
- **Data Serialization:** SuperJSON (handles Date, Map, Set, etc.)

### File Storage
- **Provider:** S3 (via Manus built-in storage)
- **Upload Helper:** `storagePut(relKey, data, contentType)`
- **Retrieval:** `storageGet(relKey, expiresIn)` returns presigned URL
- **URL Format:** `/manus-storage/{key}` (auto-proxied)
- **Usage:** Store file keys in database, file bytes in S3

### Environment Variables
All automatically injected by Manus platform:
```
DATABASE_URL              # MySQL connection string
JWT_SECRET                # Session cookie signing
VITE_APP_ID               # OAuth application ID
OAUTH_SERVER_URL          # OAuth backend
VITE_OAUTH_PORTAL_URL     # OAuth login portal
OWNER_OPEN_ID             # Project owner's ID
OWNER_NAME                # Project owner's name
BUILT_IN_FORGE_API_URL    # LLM, storage, data APIs
BUILT_IN_FORGE_API_KEY    # Bearer token (server-side)
VITE_FRONTEND_FORGE_API_KEY  # Bearer token (client-side)
VITE_FRONTEND_FORGE_API_URL  # APIs URL (client-side)
```

---

## 4. Key Features & Implementation Status

### ✓ Completed Features

| Feature | Status | Details |
|---------|--------|---------|
| **Homepage** | ✓ Live | Hero section, pain points, platform overview, CTA |
| **Blog System** | ✓ Live | 12 articles, category filtering, related articles |
| **Blog Categories** | ✓ Live | Legal Compliance & Operational Excellence pages |
| **Author Bio Card** | ✓ Live | Quinn Posner card on every blog post with consultation CTA |
| **JSON-LD Schema** | ✓ Live | BlogPosting + author markup on all articles |
| **Sitemap** | ✓ Live | All pages indexed, category pages included |
| **Services Page** | ✓ Live | Service offerings with descriptions |
| **About Page** | ✓ Live | Company mission, team, credentials |
| **Contact Page** | ✓ Live | Contact form, phone, email |
| **Service Areas Page** | ✓ Live | Geographic coverage (Washington focus) |
| **Client Portal** | ✓ Live | Dashboard for authenticated users |
| **Authentication** | ✓ Live | Manus OAuth integration |
| **Responsive Design** | ✓ Live | Mobile-first, all breakpoints |

### Planned Features (Not Yet Implemented)

- [ ] Blog search functionality (full-text search on blog page)
- [ ] Author archive page (`/blog/author/quinn-posner`)
- [ ] Category page JSON-LD schema (CollectionPage)
- [ ] RSS feed for blog subscribers
- [ ] Newsletter signup integration
- [ ] Client testimonials section
- [ ] Case studies section
- [ ] Oregon expansion content (when ready)

---

## 5. Development Workflow

### Adding a New Blog Article

1. **Prepare content** in Markdown format with metadata
2. **Upload hero image** using `manus-upload-file --webdev path/to/image.png`
3. **Insert into database** via tRPC procedure or direct SQL:
   ```sql
   INSERT INTO blog_posts (title, slug, category, excerpt, content, imageUrl, readTime, publishedAt)
   VALUES ('Article Title', 'article-slug', 'Legal Compliance', 'Excerpt...', 'Content...', '/manus-storage/...', '8 min read', NOW());
   ```
4. **Update sitemap.xml** to include new article URL
5. **Test rendering** on blog listing and detail pages
6. **Verify Related Articles** component shows correct geographic filtering
7. **Save checkpoint** with description of changes

### Modifying Design or Components

1. **Update `client/src/index.css`** for global style changes
2. **Update component files** in `client/src/components/` or `client/src/pages/`
3. **Test responsive design** at breakpoints: 640px, 1024px, 1280px
4. **Verify color contrast** against background (WCAG AA minimum)
5. **Run `pnpm test`** to verify no regressions
6. **Save checkpoint** before risky changes

### Database Schema Changes

1. **Edit `drizzle/schema.ts`** to add/modify tables
2. **Run `pnpm db:push`** to generate migration and apply
3. **Update `server/db.ts`** with new query helpers
4. **Update `server/routers.ts`** with new procedures
5. **Write vitest tests** in `server/*.test.ts`
6. **Run `pnpm test`** to verify
7. **Save checkpoint** after successful migration

---

## 6. Important Constraints & Rules

### Content Rules
- **No LinkedIn references** in UI, blog content, or metadata
- **Washington-focused** by default (Oregon content is future expansion only)
- **Author attribution:** All blog posts attributed to Quinn Posner
- **Compliance:** All content must be legally accurate for Washington State

### Design Rules
- **Dark theme only** (no light mode currently)
- **Electric blue (#2563EB) is primary brand color** — use sparingly for emphasis
- **Maintain 11% opacity borders** for subtle visual hierarchy
- **Use semantic color tokens** (not hardcoded hex values)
- **Responsive:** All components must work at 320px, 640px, 1024px, 1280px+

### Technical Rules
- **No local file storage** — use S3 via `storagePut()` for all media
- **No hardcoded API URLs** — use environment variables
- **No manual cookie handling** — use `useAuth()` hook
- **No REST endpoints** — use tRPC procedures exclusively
- **All timestamps in UTC** — store as Unix milliseconds
- **Type safety required** — no `any` types without justification

---

## 7. Deployment & Publishing

### Pre-Deployment Checklist
- [ ] All features tested in browser
- [ ] No console errors or warnings
- [ ] `pnpm test` passes all tests
- [ ] TypeScript compiles without errors
- [ ] Sitemap updated with new URLs
- [ ] SEO meta tags verified
- [ ] Mobile responsiveness tested
- [ ] Checkpoint created with descriptive message

### Publishing
1. Create checkpoint via `webdev_save_checkpoint`
2. Click **Publish** button in Manus Management UI
3. Wait for deployment to complete
4. Verify live site at https://waevictions.com

### Rollback
If issues arise post-deployment:
1. Use `webdev_rollback_checkpoint` to restore previous version
2. Identify and fix the issue
3. Create new checkpoint
4. Republish

---

## 8. Support & Troubleshooting

### Common Issues

**Blog articles not showing in Related Articles**
- Check article `category` field matches expected values
- Verify article title contains "oregon" for Oregon filtering logic
- Confirm article is published (check `publishedAt` timestamp)

**Author bio card not displaying**
- Verify `AuthorBioCard.tsx` is imported in `BlogPost.tsx`
- Check component is called with correct props
- Inspect browser console for React errors

**Sitemap not updating**
- Manually edit `client/public/sitemap.xml`
- Ensure URLs follow format: `<loc>https://waevictions.com/blog/article-slug</loc>`
- Include `<lastmod>` and `<priority>` tags

**Database migration fails**
- Run `pnpm db:push` again (may be transient)
- Check `DATABASE_URL` environment variable
- Verify MySQL connection is active
- Check for conflicting column names or types

---

## 9. Contact & Escalation

**Project Owner:** Quinn Posner  
**Company:** NW Landlord Solutions  
**Primary Domain:** https://waevictions.com  
**Service Area:** Washington State (Southwest WA focus)

For questions about content strategy, legal accuracy, or business decisions, consult with Quinn Posner.

---

**Last Updated:** June 2, 2026  
**Version:** 8cd2004e (Latest Checkpoint)
