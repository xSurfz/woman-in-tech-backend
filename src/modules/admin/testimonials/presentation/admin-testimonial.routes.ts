import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";

import { authMiddleware } from "@/core/middleware/auth.middleware.js";
import { validateRequest } from "@/core/middleware/validate-request.js";

import { createTestimonialSchema } from "@/modules/testimonials/application/validators/create-testimonial.schema.js";
import { updateTestimonialSchema } from "@/modules/testimonials/application/validators/update-testimonial.schema.js";

import {
  createTestimonialUseCase,
  updateTestimonialUseCase,
  deleteTestimonialUseCase,
} from "@/modules/testimonials/index.js";

import { AdminTestimonialController } from "./admin-testimonial.controller.js";

const router = Router();

router.use(authMiddleware);

const controller = new AdminTestimonialController(
  createTestimonialUseCase,
  updateTestimonialUseCase,
  deleteTestimonialUseCase,
);

router.post(
  "/",
  validateRequest(createTestimonialSchema),
  asyncHandler(controller.create.bind(controller)),
);

router.patch(
  "/:id",
  validateRequest(updateTestimonialSchema),
  asyncHandler(controller.update.bind(controller)),
);

router.delete("/:id", asyncHandler(controller.delete.bind(controller)));

export { router as adminTestimonialRoutes };
