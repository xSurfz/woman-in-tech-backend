import { ProgramController } from "./presentation/controllers/ProgramController.js";
import { LocalStorageService } from "@/infrastructure/upload/storage/LocalStorageService.js";
import { PrismaProgramRepository } from "./infrastructure/repositories/PrismaProgramRepository.js";

import { GetProgramsUseCase } from "./application/use-cases/GetProgramsUseCase.js";
import { CreateProgramUseCase } from "./application/use-cases/CreateProgramUseCase.js";
import { UpdateProgramUseCase } from "./application/use-cases/UpdateProgramUseCase.js";
import { DeleteProgramUseCase } from "./application/use-cases/DeleteProgramUseCase.js";

const repository = new PrismaProgramRepository();
const storageProvider = new LocalStorageService();

const getProgramsUseCase = new GetProgramsUseCase(repository);
const createProgramUseCase = new CreateProgramUseCase(repository, storageProvider);
const updateProgramUseCase = new UpdateProgramUseCase(repository, storageProvider);
const deleteProgramUseCase = new DeleteProgramUseCase(repository);

export const programController = new ProgramController(getProgramsUseCase);

export { getProgramsUseCase, createProgramUseCase, updateProgramUseCase, deleteProgramUseCase };
