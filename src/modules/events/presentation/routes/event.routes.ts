import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";

import { eventController } from "@/modules/events/index.js";

import { validateRequest } from "@/core/middleware/validate-request.js";

import { createEventSchema } from "../../application/validators/create-event.schema.js";

import { updateEventSchema } from "../../application/validators/update-event.schema.js";
const router = Router();

router.get("/", asyncHandler(eventController.getEvents.bind(eventController)));
router.get(
  "/:slug",
  asyncHandler(eventController.getEventBySlug.bind(eventController)),
);

export { router as eventRoutes };
