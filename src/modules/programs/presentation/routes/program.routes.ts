import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";

import { programController } from "@/modules/programs/index.js";

const router = Router();

router.get(
  "/",
  asyncHandler(programController.getPrograms.bind(programController)),
);

export { router as programRoutes };
