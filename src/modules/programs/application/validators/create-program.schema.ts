import { z } from "zod";

export const createProgramSchema = z.object({
  slug: z.string().min(1),

  title: z.string().min(1),

  description: z.string().min(1),

  imageUrl: z.string().url().optional(),

  actionText: z.string().optional(),

  actionUrl: z.string().url().optional(),

  sortOrder: z.number().optional(),

  isFeatured: z.boolean().optional(),
});
