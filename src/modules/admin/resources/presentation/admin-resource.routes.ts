import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";

import { authMiddleware } from "@/core/middleware/auth.middleware.js";
import { validateRequest } from "@/core/middleware/validate-request.js";

import { createResourceSchema } from "@/modules/resources/application/validators/create-resource.schema.js";
import { updateResourceSchema } from "@/modules/resources/application/validators/update-resource.schema.js";

import {
  createResourceUseCase,
  updateResourceUseCase,
  deleteResourceUseCase,
} from "@/modules/resources/index.js";

import { AdminResourceController } from "./admin-resource.controller.js";

const router = Router();

router.use(authMiddleware);

const controller = new AdminResourceController(
  createResourceUseCase,
  updateResourceUseCase,
  deleteResourceUseCase,
);

router.post(
  "/",
  validateRequest(createResourceSchema),
  asyncHandler(controller.create.bind(controller)),
);

router.patch(
  "/:id",
  validateRequest(updateResourceSchema),
  asyncHandler(controller.update.bind(controller)),
);

router.delete("/:id", asyncHandler(controller.delete.bind(controller)));

export { router as adminResourceRoutes };
