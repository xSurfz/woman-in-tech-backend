import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";

import { interestController } from "@/modules/interests/index.js";

const router = Router();

router.get(
  "/",
  asyncHandler(interestController.getInterests.bind(interestController)),
);

export { router as interestRoutes };
