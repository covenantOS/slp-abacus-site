# 301 Redirect Strategy — ServiceLinePro Migration

This document outlines the approach for preserving SEO equity and existing URLs when migrating from the previous website to the new Astro site on Cloudflare Pages.

---

## Goals

1. **Preserve search rankings** — Every indexed URL that changes must return a `301 Moved Permanently` response pointing to its new location.
2. **Maintain backlink value** — External links to old URLs continue to pass authority.
3. **Avoid soft-404s** — No old URL should land on a generic 404 page without a redirect.

---

## Implementation Method

Cloudflare Pages supports redirects via a `_redirects` file placed in the build output (`public/` directory in Astro, copied to `dist/` at build time).

### File: `public/_redirects`

Format (one rule per line):

```
/old-path /new-path 301
```

### Example Rules

```text
# Service pages
/seo-services              /services/local-seo   301
/seo                       /services/local-seo   301
/local-seo                 /services/local-seo   301
/google-ads                /services/ppc          301
/ppc                       /services/ppc          301
/web-design-services       /services/web-design   301
/website-design            /services/web-design   301
/tv-advertising            /services/tv-streaming 301
/streaming                 /services/tv-streaming 301

# Core pages
/about-us                  /about                 301
/contact-us                /contact               301
/faqs                      /faq                   301
/schedule                  /booking               301
/book-a-call               /booking               301

# Blog & resources (pattern)
/blog/*                    /blog/:splat           301
/case-study/*              /case-studies/:splat   301

# Catch-all for old service subpages
/services/seo              /services/local-seo    301
/services/google-ads       /services/ppc          301
```

> **Note:** The example rules above are *templates*. Before launch, audit the previous site's indexed URLs using Google Search Console → Coverage report and/or `site:servicelinepro.com` search to build the final list.

---

## Pre-Launch Checklist

- [ ] **Crawl the old site** — Use Screaming Frog or `sitemap.xml` to inventory all live URLs.
- [ ] **Map old → new** — For every old URL, determine the best matching new URL.
- [ ] **Add rules to `public/_redirects`** — Commit the file to the repo.
- [ ] **Test redirects locally** — Use `npx wrangler pages dev dist` to verify redirect behaviour.
- [ ] **Verify post-launch** — After DNS switch, spot-check the top 20 pages with `curl -I` to confirm `301` responses.
- [ ] **Monitor Search Console** — Watch for crawl errors and coverage drops for 30 days post-launch.

---

## Cloudflare Pages Limits

- **Static redirects:** Up to 2,000 rules in `_redirects`.
- **Dynamic redirects:** For more complex patterns, use Cloudflare Bulk Redirects (available in the dashboard under Rules → Redirect Rules) which support regex and thousands of rules.

---

## Fallback: Custom 404 Page

Create `src/pages/404.astro` with:
- Clear messaging that the page has moved
- Search functionality or links to top pages
- Contact info so visitors can still reach ServiceLinePro

This ensures any unmapped old URL still provides a useful experience.
