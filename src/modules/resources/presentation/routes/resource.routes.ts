import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";

import { resourceController } from "@/modules/resources/index.js";

const router = Router();

router.get(
  "/",
  asyncHandler(resourceController.getResources.bind(resourceController)),
);

export { router as resourceRoutes };
