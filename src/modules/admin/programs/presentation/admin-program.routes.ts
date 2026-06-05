import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";
import { upload } from "@/infrastructure/upload/multer.js";
import {
  getProgramsUseCase,
  createProgramUseCase,
  updateProgramUseCase,
  deleteProgramUseCase,
} from "@/modules/programs/index.js";

import { AdminProgramController } from "./admin-program.controller.js";

const router = Router();

const controller = new AdminProgramController(
  getProgramsUseCase,
  createProgramUseCase,
  updateProgramUseCase,
  deleteProgramUseCase,
);
router.get("/", asyncHandler(controller.getAll.bind(controller)));

router.post("/", upload.single("image"), asyncHandler(controller.create.bind(controller)),);

router.patch("/:id", upload.single("image"), asyncHandler(controller.update.bind(controller)));

router.delete("/:id", asyncHandler(controller.delete.bind(controller)));

export { router as adminProgramRoutes };
