import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";

import { authMiddleware } from "@/core/middleware/auth.middleware.js";
import { validateRequest } from "@/core/middleware/validate-request.js";

import { createResourceSchema } from "@/modules/resources/application/validators/create-resource.schema.js";
import { updateResourceSchema } from "@/modules/resources/application/validators/update-resource.schema.js";
import { upload } from "@/infrastructure/upload/multer.js";

import {
  getResourcesUseCase,
  createResourceUseCase,
  updateResourceUseCase,
  deleteResourceUseCase,
} from "@/modules/resources/index.js";

import { AdminResourceController } from "./admin-resource.controller.js";

const router = Router();

router.use(authMiddleware);

const controller = new AdminResourceController(
  getResourcesUseCase,
  createResourceUseCase,
  updateResourceUseCase,
  deleteResourceUseCase,
);

router.get(
  "/",
  asyncHandler(
    controller.getAll.bind(controller),
  ),
);

router.post(
  "/",
  upload.single("image"),
  validateRequest(createResourceSchema),
  asyncHandler(controller.create.bind(controller)),
);

router.patch(
  "/:id",
  upload.single("image"),
  validateRequest(updateResourceSchema),
  asyncHandler(controller.update.bind(controller)),
);

router.delete("/:id", asyncHandler(controller.delete.bind(controller)));

export { router as adminResourceRoutes };
