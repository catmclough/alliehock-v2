import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      order: z.number(),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
};
