import { defineCollection, z } from "astro:content";

const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    network: z.string().optional(),
    credit: z.string().optional(),
    order: z.number(),
    year: z.number().optional(),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

const aboutCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

export const collections = {
  work: workCollection,
  about: aboutCollection,
};
