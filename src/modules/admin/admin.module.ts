import { Router } from "express";

import { asyncHandler } from "@/shared/utils/async-handler.js";

import {
  createProgramUseCase,
  updateProgramUseCase,
  deleteProgramUseCase,
  getProgramsUseCase,
} from "@/modules/programs/index.js";
import {
  createResourceUseCase,
  updateResourceUseCase,
  deleteResourceUseCase,
  getResourcesUseCase,
} from "@/modules/resources/index.js";
import { AdminResourceController } from "./resources/presentation/admin-resource.controller.js";
import { AdminProgramController } from "./programs/presentation/admin-program.controller.js";
import { get } from "node:http";
const router = Router();

const controller = new AdminProgramController(
  getProgramsUseCase,
  createProgramUseCase,
  updateProgramUseCase,
  deleteProgramUseCase,
);

const adminResourceController = new AdminResourceController(
  getResourcesUseCase,
  createResourceUseCase,
  updateResourceUseCase,
  deleteResourceUseCase,
);

router.post("/", asyncHandler(controller.create.bind(controller)));

router.patch("/:id", asyncHandler(controller.update.bind(controller)));

router.delete("/:id", asyncHandler(controller.delete.bind(controller)));

export { router as adminProgramRoutes };
