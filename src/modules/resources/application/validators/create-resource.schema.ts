import { z } from "zod";

export const createResourceSchema = z.object({
  title: z.string().min(3),

  description: z.string().min(10),

  imageUrl: z.string().url().optional(),

  url: z.url(),

  type: z.enum(["COURSE", "SCHOLARSHIP", "MATERIAL", "COMMUNITY", "OTHER"]),

  isFeatured: z.boolean().optional(),
});
