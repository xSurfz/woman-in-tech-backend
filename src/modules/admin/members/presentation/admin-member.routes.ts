import { Router } from "express";
import { asyncHandler } from "@/shared/utils/async-handler.js";
import { authMiddleware } from "@/core/middleware/auth.middleware.js";
import { validateRequest } from "@/core/middleware/validate-request.js";
import { createMemberSchema } from "@/modules/members/application/validators/create-member.schema.js";
import { updateMemberSchema } from "@/modules/members/application/validators/update-member.schema.js";
import { upload } from "@/infrastructure/upload/multer.js";
import {
  getMembersUseCase,
  createMemberUseCase,
  updateMemberUseCase,
  deleteMemberUseCase,
} from "@/modules/members/index.js";

import { AdminMemberController } from "./admin-member.controller.js";
const router = Router();

router.use(authMiddleware);

const controller = new AdminMemberController(
  getMembersUseCase,
  createMemberUseCase,
  updateMemberUseCase,
  deleteMemberUseCase,
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
  validateRequest(createMemberSchema),
  asyncHandler(controller.create.bind(controller)),
);

router.patch(
  "/:id",
  upload.single("image"),
  validateRequest(updateMemberSchema),
  asyncHandler(controller.update.bind(controller)),
);

router.delete("/:id", (req, res) => controller.delete(req, res));

export { router as adminMemberRoutes };
