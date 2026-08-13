# NW Landlord Solutions — Static Site

Marketing site for NW Landlord Solutions (waevictions.com), converted from a Manus full-stack app (React + Express + tRPC + MySQL) to a fully static React SPA deployable on GitHub Pages.

## What changed in the conversion

- **Blog posts** are baked in at build time: all 15 posts (content, categories, images) were exported from the production database into [client/src/lib/blogPosts.json](client/src/lib/blogPosts.json) and served through [client/src/lib/blogData.ts](client/src/lib/blogData.ts). No database or API is needed.
- **Images** (blog covers, logo, headshot, portal screenshots) were downloaded from the live site into `client/public/blog-images/` and `client/public/images/`.
- **Server removed**: Express/tRPC/Drizzle/MySQL, auth, and the Manus runtime plugins are gone. The contact form already posted to Formspree, so it keeps working statically.
- **SPA routing on Pages**: the build copies `index.html` to `404.html` so deep links like `/blog/some-post` load the app, and adds `.nojekyll`.

## Updating blog posts

Edit `client/src/lib/blogPosts.json` (add the cover image to `client/public/blog-images/` and reference it as `/blog-images/<file>`), then rebuild. The old Search Atlas webhook no longer applies — posts are files now.

## Develop / build

```bash
npm install
npm run dev       # local dev server
npm run build     # outputs static site to dist/
npm run preview   # serve the built site locally
```

## Deploying to GitHub Pages

1. Create a GitHub repo and push this project (`main` branch).
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. The included workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) builds and deploys on every push to `main`. It auto-detects the base path: project sites build with `/<repo>/`, while `<user>.github.io` repos or a custom domain build at `/`.

### Custom domain (waevictions.com)

Add a file `client/public/CNAME` containing `waevictions.com`, push, then configure the domain under **Settings → Pages** and point DNS (CNAME record → `<user>.github.io`). The workflow detects the CNAME file and builds with base `/`.
