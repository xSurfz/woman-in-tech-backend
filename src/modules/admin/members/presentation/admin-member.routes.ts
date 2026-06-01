import { Router } from "express";

import { authMiddleware } from "@/core/middleware/auth.middleware.js";
import { validateRequest } from "@/core/middleware/validate-request.js";
import { createMemberSchema } from "@/modules/members/application/validators/create-member.schema.js";
import { updateMemberSchema } from "@/modules/members/application/validators/update-member.schema.js";
import { UpdateMemberUseCase } from "@/modules/members/application/use-cases/UpdateMemberUseCase.js";
import { CreateMemberUseCase } from "@/modules/members/application/use-cases/CreateMemberUseCase.js";
import { AdminMemberController } from "./admin-member.controller.js";
import { DeleteMemberUseCase } from "@/modules/members/application/use-cases/DeleteMemberUseCase.js";
const router = Router();

router.use(authMiddleware);

const createMemberUseCase = new CreateMemberUseCase();
const updateMemberUseCase = new UpdateMemberUseCase();
const deleteMemberUseCase = new DeleteMemberUseCase();
const controller = new AdminMemberController(
  createMemberUseCase,
  updateMemberUseCase,
  deleteMemberUseCase,
);

router.post("/", validateRequest(createMemberSchema), (req, res) =>
  controller.create(req, res),
);

router.patch("/:id", validateRequest(updateMemberSchema), (req, res) =>
  controller.update(req, res),
);

router.delete("/:id", (req, res) => controller.delete(req, res));

export { router as adminMemberRoutes };
