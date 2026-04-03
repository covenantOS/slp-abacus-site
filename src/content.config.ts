import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const case_studies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case_studies' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    client_name: z.string(),
    industry: z.string(),
    service: z.enum(['local-seo', 'ppc', 'web-design', 'tv-streaming']),
    featured_image: z.string().optional(),
    before_metrics: z.string().optional(),
    after_metrics: z.string().optional(),
    testimonial: z.string().optional(),
    testimonial_author: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

const blog_posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog_posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    author: z.string().default('ServiceLinePro Team'),
    category: z.enum(['seo', 'ppc', 'web-design', 'marketing', 'industry-news']),
    featured_image: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

const industry_pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industry_pages' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    industry: z.string(),
    hero_headline: z.string(),
    hero_subheadline: z.string().optional(),
    featured_image: z.string().optional(),
    services_offered: z.array(z.string()).default([]),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    draft: z.boolean().default(false),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

const location_pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/location_pages' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    city: z.string(),
    state: z.string(),
    region: z.string().optional(),
    hero_headline: z.string(),
    hero_subheadline: z.string().optional(),
    featured_image: z.string().optional(),
    services_available: z.array(z.string()).default([]),
    local_phone: z.string().optional(),
    map_embed: z.string().optional(),
    draft: z.boolean().default(false),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

const team_members = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team_members' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    title: z.string(),
    photo: z.string().optional(),
    bio: z.string(),
    linkedin: z.string().optional(),
    email: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  case_studies,
  blog_posts,
  industry_pages,
  location_pages,
  team_members,
};
