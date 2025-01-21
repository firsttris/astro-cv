import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const footer = defineCollection({
  loader: glob({ pattern: "**/footer.{md,mdx}", base: "./src/mdx" }),
  schema: z.object({
    name: z.string(),
    locale: z.string()
  })
});

export const collections = { footer };