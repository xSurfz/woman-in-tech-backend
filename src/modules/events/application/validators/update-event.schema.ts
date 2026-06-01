import { z } from "zod";

export const updateEventSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().min(10).optional(),

  imageUrl: z.string().url().optional(),
  location: z.string().optional(),

  eventMode: z.enum(["ONSITE", "ONLINE", "HYBRID"]).optional(),

  startsAt: z.coerce.date().optional(),
  endsAt: z.coerce.date().optional(),

  externalUrl: z.string().url().optional(),

  isFeatured: z.boolean().optional(),
});
