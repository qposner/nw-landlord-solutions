# NW Landlord Solutions Website

A complete multi-page React/Tailwind website for **NW Landlord Solutions**, positioned as a Washington landlord-side eviction law firm presented through a B2B legal-technology product aesthetic.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home page with hero, metrics, workflow, services overview, why-us section, and client portal CTA. |
| `/platform` | Product-style platform page structured as Problem → Solution → Workflow → Efficiency Impact. |
| `/services` | Flat-fee service model page without public price listing, emphasizing predictability and volume efficiency. |
| `/about` | Philosophy-forward Quinn Posner profile with Clark County, landlord-side, and WMFHA proof points. |
| `/blog` | Card-based blog index with category filters and placeholder eviction-law topics. |
| `/contact` | Static contact/intake form, office address, and phone number. |

## Design System

The site follows a **dark SaaS command-center** aesthetic with a Swiss typographic structure. It uses deep navy surfaces, electric-blue operational signals, geometric cards, generous whitespace, custom generated product visuals, and restrained glow effects on primary calls to action.

| Token | Value |
|---|---|
| Base | `#0a0f1e` |
| Primary accent | `#2563eb` |
| Secondary | `#ffffff` |
| Muted text | `#94a3b8` |
| Display type | Space Grotesk |
| Body type | IBM Plex Sans |
| Metadata type | IBM Plex Mono |

## Client Portal

All persistent **Client Portal** actions link to:

```txt
https://app2.ixfoundry.co/sign-in
```

## Local Development

```bash
pnpm install
pnpm dev
```

## Production Build

```bash
pnpm build
pnpm start
```

## Framer Import Notes

This is clean, componentized React/Tailwind code. For Framer workflows, import or recreate pages from the generated static build or transfer the component structure manually. The design uses standard HTML semantics, CSS classes, and externally hosted image assets rather than canvas-only effects, making it straightforward to reproduce in Framer.

## Static Form Note

The contact form is intentionally frontend-only in this static build. It validates required fields and shows a preview confirmation. Connect a form endpoint or CRM integration before using it as a production intake channel.
