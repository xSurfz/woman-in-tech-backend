import { z } from "zod";

export const updateMemberSchema = z.object({
  fullName: z.string().min(3).optional(),
  role: z.string().min(2).optional(),

  biography: z.string().optional(),

  email: z.string().email().optional(),

  githubUrl: z.string().url().optional(),
  linkedinUrl: z.string().url().optional(),

  imageUrl: z.string().url().optional(),

  category: z.enum(["LEADER", "MEMBER"]).optional(),

  sortOrder: z.number().optional(),

  interests: z.array(z.string()).optional(),
});
