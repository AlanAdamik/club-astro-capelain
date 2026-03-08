import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const actualites = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/actualites" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

const evenements = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/evenements" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    heure: z.string(),
    lieu: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

const galerie = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/galerie" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    images: z.array(z.string()),
    cover: z.string(),
  }),
});

export const collections = { actualites, evenements, galerie };
