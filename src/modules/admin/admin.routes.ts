import { Router } from "express";
import { adminEventRoutes } from "./events/presentation/admin-event.routes.js";
import { authMiddleware } from "@/core/middleware/auth.middleware.js";
import { adminMemberRoutes } from "./members/presentation/admin-member.routes.js";
import { adminProgramRoutes } from "./programs/presentation/admin-program.routes.js";
import { adminResourceRoutes } from "./resources/presentation/admin-resource.routes.js";
import { adminTestimonialRoutes } from "./testimonials/presentation/admin-testimonial.routes.js";
import { adminInterestRoutes } from "./interests/presentation/admin-interest.routes.js";
const router = Router();

router.use(authMiddleware);

router.use("/events", adminEventRoutes);
router.use("/members", adminMemberRoutes);
router.use("/programs", adminProgramRoutes);
router.use("/resources", adminResourceRoutes);
router.use("/testimonials", adminTestimonialRoutes);
router.use("/interests", adminInterestRoutes);
export { router as adminRoutes };
