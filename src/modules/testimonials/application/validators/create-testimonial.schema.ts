import { z } from "zod";

export const createTestimonialSchema = z.object({
  fullName: z.string().min(2),

  company: z.string().optional(),

  role: z.string().min(2),

  content: z.string().min(10),

  imageUrl: z.string().url().optional(),

  sortOrder: z.coerce.number().optional(),
});
