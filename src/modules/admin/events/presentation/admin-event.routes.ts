import { Router } from "express";

import { authMiddleware } from "@/core/middleware/auth.middleware.js";
import { validateRequest } from "@/core/middleware/validate-request.js";

import { createEventSchema } from "@/modules/events/application/validators/create-event.schema.js";
import { updateEventSchema } from "@/modules/events/application/validators/update-event.schema.js";

import {
  createEventUseCase,
  updateEventUseCase,
  deleteEventUseCase,
} from "@/modules/events/index.js";

import { AdminEventController } from "./admin-event.controller.js";
import { upload } from "@/infrastructure/upload/multer.js";

const router = Router();

router.use(authMiddleware);

const controller = new AdminEventController(
  createEventUseCase,
  updateEventUseCase,
  deleteEventUseCase,
);

router.post(
  "/",
  upload.single("image"),
  validateRequest(createEventSchema),
  controller.create.bind(controller),
);

router.patch(
  "/:id",
  validateRequest(updateEventSchema),
  controller.update.bind(controller),
);

router.delete("/:id", controller.delete.bind(controller));

export { router as adminEventRoutes };
