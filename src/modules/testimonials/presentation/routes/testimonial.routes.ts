import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";

import { testimonialController } from "@/modules/testimonials/index.js";

const router = Router();

router.get(
  "/",
  asyncHandler(
    testimonialController.getTestimonials.bind(testimonialController),
  ),
);

export { router as testimonialRoutes };
