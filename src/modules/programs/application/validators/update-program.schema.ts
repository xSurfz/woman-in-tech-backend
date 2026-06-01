import { z } from "zod";
import { createProgramSchema } from "./create-program.schema.js";
export const updateProgramSchema = createProgramSchema.partial();
