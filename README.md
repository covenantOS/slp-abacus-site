# ServiceLinePro — Astro Website

High-performance marketing website for ServiceLinePro, built with [Astro](https://astro.build), Tailwind CSS v4, and Sveltia CMS.

## Tech Stack

- **Framework:** Astro 5.x (static output)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **CMS:** Sveltia CMS (Git-based, headless)
- **Integrations:** `@astrojs/sitemap`, `@astrojs/mdx`

## Local Development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Build

```bash
npm run build
```

Static output is generated in the `dist/` directory.

## Deployment — Cloudflare Pages

### Steps

1. **Connect GitHub repo** — In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git** and select the `covenantOS/slp-abacus-site` repository.
2. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** Set environment variable `NODE_VERSION` = `20` (or later)
3. **Deploy** — Cloudflare will build and deploy on every push to `main`.
4. **Custom domain** — In the Pages project settings, add `servicelinepro.com` and `www.servicelinepro.com` as custom domains. Cloudflare will provision SSL automatically.

### Environment Variables (if needed)

| Variable | Value | Notes |
|---|---|---|
| `NODE_VERSION` | `20` | Ensures compatible Node runtime |

### Preview Deployments

Every pull request automatically gets a unique preview URL (e.g., `<hash>.slp-abacus-site.pages.dev`). Use these for QA before merging.

## Project Structure

```
src/
├── components/    # Reusable Astro components
├── content/       # CMS-managed content collections
├── layouts/       # Page layouts (BaseLayout, PageLayout)
├── pages/         # File-based routing
│   ├── services/  # Service pages (local-seo, ppc, web-design, tv-streaming)
│   └── ...        # About, Contact, Blog, Case Studies, etc.
└── styles/        # Global CSS & Tailwind theme
public/
├── admin/         # Sveltia CMS admin panel
├── images/        # Static images
└── robots.txt     # Search engine directives
```

## CMS Access

See [CMS_GUIDE.md](./CMS_GUIDE.md) for Sveltia CMS login and content editing instructions.

## Redirect Strategy

See [REDIRECT_STRATEGY.md](./REDIRECT_STRATEGY.md) for the 301 redirect plan to preserve SEO equity from the previous site.
