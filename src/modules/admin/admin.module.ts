import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";

import {
  createProgramUseCase,
  updateProgramUseCase,
  deleteProgramUseCase,
} from "@/modules/programs/index.js";
import {
  createResourceUseCase,
  updateResourceUseCase,
  deleteResourceUseCase,
} from "@/modules/resources/index.js";
import { AdminResourceController } from "./resources/presentation/admin-resource.controller.js";
import { AdminProgramController } from "./programs/presentation/admin-program.controller.js";
const router = Router();

const controller = new AdminProgramController(
  createProgramUseCase,
  updateProgramUseCase,
  deleteProgramUseCase,
);

const adminResourceController = new AdminResourceController(
  createResourceUseCase,
  updateResourceUseCase,
  deleteResourceUseCase,
);

router.post("/", asyncHandler(controller.create.bind(controller)));

router.patch("/:id", asyncHandler(controller.update.bind(controller)));

router.delete("/:id", asyncHandler(controller.delete.bind(controller)));

export { router as adminProgramRoutes };
