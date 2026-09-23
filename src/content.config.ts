import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each Markdown file in src/content/projects/ becomes a card on the home page
// and a detail page at /projects/<filename>.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string().optional(),
    context: z.string().optional(), // e.g. "RWTH Aachen", "Personal"
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    order: z.number().default(99), // lower = shown first
  }),
});

export const collections = { projects };
