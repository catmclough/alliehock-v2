import { defineCollection, z } from "astro:content";

const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    network: z.string().optional(),
    credit: z.string(),
    order: z.number(),
    year: z.number(),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

export const collections = {
  work: workCollection,
};
