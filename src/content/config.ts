import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.date(),
    featured: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    quote: z.string(),
    projectType: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = {
  projects,
  testimonials,
};