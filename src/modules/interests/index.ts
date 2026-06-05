import { InterestController } from "./presentation/controllers/InterestController.js";

import { PrismaInterestRepository } from "./infrastructure/repositories/PrismaInterestRepository.js";

import { GetInterestsUseCase } from "./application/use-cases/GetInterestsUseCase.js";
import { CreateInterestUseCase } from "./application/use-cases/CreateInterestUseCase.js";
import { UpdateInterestUseCase } from "./application/use-cases/UpdateInterestUseCase.js";
import { DeleteInterestUseCase } from "./application/use-cases/DeleteInterestUseCase.js";

const repository = new PrismaInterestRepository();

const getInterestsUseCase = new GetInterestsUseCase(repository);

const createInterestUseCase = new CreateInterestUseCase(repository);

const updateInterestUseCase = new UpdateInterestUseCase(repository);

const deleteInterestUseCase = new DeleteInterestUseCase(repository);

export const interestController = new InterestController(getInterestsUseCase);

export { getInterestsUseCase, createInterestUseCase, updateInterestUseCase, deleteInterestUseCase };
