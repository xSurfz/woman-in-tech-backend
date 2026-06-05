import { ResourceController } from "./presentation/controllers/ResourceController.js";

import { PrismaResourceRepository } from "./infrastructure/repositories/PrismaResourceRepository.js";

import { GetResourcesUseCase } from "./application/use-cases/GetResourcesUseCase.js";
import { CreateResourceUseCase } from "./application/use-cases/CreateResourceUseCase.js";
import { UpdateResourceUseCase } from "./application/use-cases/UpdateResourceUseCase.js";
import { DeleteResourceUseCase } from "./application/use-cases/DeleteResourceUseCase.js";
import { LocalStorageService } from "@/infrastructure/upload/storage/LocalStorageService.js";

const repository = new PrismaResourceRepository();
const storageProvider = new LocalStorageService();

const getResourcesUseCase = new GetResourcesUseCase(repository);

const createResourceUseCase = new CreateResourceUseCase(repository, storageProvider);
const updateResourceUseCase = new UpdateResourceUseCase(repository, storageProvider);
const deleteResourceUseCase = new DeleteResourceUseCase(repository);

export const resourceController = new ResourceController(getResourcesUseCase);

export { getResourcesUseCase, createResourceUseCase, updateResourceUseCase, deleteResourceUseCase };
