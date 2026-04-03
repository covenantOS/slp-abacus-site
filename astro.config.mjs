// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://servicelinepro.com',
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()]
  },
  content: {
    collections: {
      case_studies: {
        schema: 'src/content/case_studies',
      },
      blog_posts: {
        schema: 'src/content/blog_posts',
      },
      industry_pages: {
        schema: 'src/content/industry_pages',
      },
      location_pages: {
        schema: 'src/content/location_pages',
      },
      team_members: {
        schema: 'src/content/team_members',
      },
    },
  },
});
