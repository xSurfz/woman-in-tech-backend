import { MemberController } from "./presentation/controllers/MemberController.js";

import { PrismaMemberRepository } from "./infrastructure/repositories/PrismaMemberRepository.js";

import { GetMemberUseCase } from "./application/use-cases/GetMemberUseCase.js";
import { CreateMemberUseCase } from "./application/use-cases/CreateMemberUseCase.js";
import { UpdateMemberUseCase } from "./application/use-cases/UpdateMemberUseCase.js";
import { DeleteMemberUseCase } from "./application/use-cases/DeleteMemberUseCase.js";
import { LocalStorageService } from "@/infrastructure/upload/storage/LocalStorageService.js";

const repository = new PrismaMemberRepository();
const storageProvider = new LocalStorageService();

const getMembersUseCase = new GetMemberUseCase(repository);

const createMemberUseCase = new CreateMemberUseCase(repository, storageProvider);
const updateMemberUseCase = new UpdateMemberUseCase(repository, storageProvider);
const deleteMemberUseCase = new DeleteMemberUseCase(repository);

export const resourceController = new MemberController(getMembersUseCase);

export { getMembersUseCase, createMemberUseCase, updateMemberUseCase, deleteMemberUseCase };
