import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";

import { authMiddleware } from "@/core/middleware/auth.middleware.js";
import { validateRequest } from "@/core/middleware/validate-request.js";

import { createInterestSchema } from "@/modules/interests/application/validators/create-interest.schema.js";
import { updateInterestSchema } from "@/modules/interests/application/validators/update-interest.schema.js";

import {
  getInterestsUseCase,
  createInterestUseCase,
  updateInterestUseCase,
  deleteInterestUseCase,
} from "@/modules/interests/index.js";

import { AdminInterestController } from "./admin-interest.controller.js";

const router = Router();

router.use(authMiddleware);

const controller = new AdminInterestController(
  getInterestsUseCase,
  createInterestUseCase,
  updateInterestUseCase,
  deleteInterestUseCase,
);

router.get(
  "/",
  asyncHandler(
    controller.getAll.bind(controller),
  ),
);

router.post(
  "/",
  validateRequest(createInterestSchema),
  asyncHandler(controller.create.bind(controller)),
);

router.patch(
  "/:id",
  validateRequest(updateInterestSchema),
  asyncHandler(controller.update.bind(controller)),
);

router.delete("/:id", asyncHandler(controller.delete.bind(controller)));

export { router as adminInterestRoutes };
