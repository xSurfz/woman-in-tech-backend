import { ProgramController } from "./presentation/controllers/ProgramController.js";

import { PrismaProgramRepository } from "./infrastructure/repositories/PrismaProgramRepository.js";

import { GetProgramsUseCase } from "./application/use-cases/GetProgramsUseCase.js";
import { CreateProgramUseCase } from "./application/use-cases/CreateProgramUseCase.js";
import { UpdateProgramUseCase } from "./application/use-cases/UpdateProgramUseCase.js";
import { DeleteProgramUseCase } from "./application/use-cases/DeleteProgramUseCase.js";

const repository = new PrismaProgramRepository();

const getProgramsUseCase = new GetProgramsUseCase(repository);

const createProgramUseCase = new CreateProgramUseCase(repository);
const updateProgramUseCase = new UpdateProgramUseCase(repository);
const deleteProgramUseCase = new DeleteProgramUseCase(repository);

export const programController = new ProgramController(getProgramsUseCase);

export { createProgramUseCase, updateProgramUseCase, deleteProgramUseCase };
