import { z } from "zod";

export const createInterestSchema = z.object({
  name: z.string().min(2),

  description: z.string().optional(),
});
