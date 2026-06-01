import { ResourceController } from "./presentation/controllers/ResourceController.js";

import { PrismaResourceRepository } from "./infrastructure/repositories/PrismaResourceRepository.js";

import { GetResourcesUseCase } from "./application/use-cases/GetResourcesUseCase.js";

import { CreateResourceUseCase } from "./application/use-cases/CreateResourceUseCase.js";
import { UpdateResourceUseCase } from "./application/use-cases/UpdateResourceUseCase.js";
import { DeleteResourceUseCase } from "./application/use-cases/DeleteResourceUseCase.js";

const repository = new PrismaResourceRepository();

const getResourcesUseCase = new GetResourcesUseCase(repository);

const createResourceUseCase = new CreateResourceUseCase();
const updateResourceUseCase = new UpdateResourceUseCase();
const deleteResourceUseCase = new DeleteResourceUseCase();

export const resourceController = new ResourceController(getResourcesUseCase);

export { createResourceUseCase, updateResourceUseCase, deleteResourceUseCase };
