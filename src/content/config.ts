import { defineCollection, z } from "astro:content";

const churches = defineCollection({
  schema: z.object({
    title: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    address: z.string(),
    image: z.string(),
  }),
});

export const collections = { churches };
