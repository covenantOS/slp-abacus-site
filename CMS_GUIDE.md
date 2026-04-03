# Sveltia CMS — Content Management Guide

ServiceLinePro uses **Sveltia CMS**, a lightweight Git-based content management system. All content changes are saved as commits directly to the GitHub repository.

---

## Accessing the CMS

1. Navigate to **[https://servicelinepro.com/admin/](https://servicelinepro.com/admin/)**
2. Click **"Login with Netlify Identity"** (or the OAuth provider configured).
3. Authenticate with your authorized GitHub account.
4. You'll be taken to the CMS dashboard.

> **First-time setup:** An admin must invite your email via the Netlify Identity panel (or the configured auth provider) before you can log in.

---

## Content Collections

The CMS provides editors for the following collections:

| Collection | Description | Folder |
|---|---|---|
| **Case Studies** | Client success stories with before/after metrics | `src/content/case_studies/` |
| **Blog Posts** | Articles, guides, and news | `src/content/blog_posts/` |
| **Industry Pages** | SEO-optimized pages per industry (HVAC, Plumbing, etc.) | `src/content/industry_pages/` |
| **Location Pages** | City/region landing pages for local SEO | `src/content/location_pages/` |
| **Team Members** | Staff bios and photos | `src/content/team_members/` |

---

## Creating / Editing Content

1. In the CMS sidebar, select a collection (e.g., **Blog Posts**).
2. Click **"New Blog Post"** (or open an existing entry).
3. Fill in the required fields:
   - **Title** — Page heading
   - **Slug** — URL-friendly identifier (auto-generated from title)
   - **Body** — Main content (Markdown editor with rich text toolbar)
   - **SEO Title / SEO Description** — For search engine metadata
   - **Featured Image** — Upload or select from the media library
   - **Draft** — Toggle ON to keep the post hidden from the live site
4. Click **"Publish"** (or **"Save"** for drafts).

> Publishing creates a Git commit on the `main` branch. Cloudflare Pages will automatically rebuild and deploy within ~60 seconds.

---

## Media / Images

- Upload images via the **Media** section in the CMS or inline within any image field.
- Images are stored in `public/images/uploads/`.
- Use descriptive filenames (e.g., `hvac-case-study-results.jpg`) for SEO benefit.
- Recommended formats: WebP or optimized JPEG/PNG.

---

## Tips

- **Preview before publishing:** Use the CMS preview pane to see how content will look.
- **SEO fields matter:** Always fill in `seo_title` and `seo_description` — these directly control how the page appears in Google.
- **Draft mode:** Use the Draft toggle to work on content without it going live.
- **Undo mistakes:** Since every change is a Git commit, you can revert any change via the GitHub repository history.

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Can't log in | Ensure your email has been invited via Netlify Identity / OAuth provider |
| Changes not appearing | Wait 60–90 seconds for Cloudflare Pages to rebuild; check the deploy status in the Cloudflare dashboard |
| Image upload fails | Check file size (keep under 5 MB); ensure filename has no special characters |
| CMS loads blank page | Clear browser cache and try again; check browser console for errors |
