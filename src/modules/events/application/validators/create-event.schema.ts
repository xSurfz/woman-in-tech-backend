import { z } from "zod";

export const createEventSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),

  location: z.string().optional(),

  eventMode: z.enum(["ONSITE", "ONLINE", "HYBRID"]),

  startsAt: z.string(),
  endsAt: z.string().optional(),

  externalUrl: z.string().optional(),

  isFeatured: z.string().optional(),
});
