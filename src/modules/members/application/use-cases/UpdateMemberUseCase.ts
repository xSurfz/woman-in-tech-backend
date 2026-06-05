import { MemberRepository } from "../../domain/repositories/MemberRepository.js";
import { NotFoundException } from "@/core/exceptions/NotFoundException.js";
import { UpdateMemberDto } from "../dto/UpdateMemberDto.js";
import { FileStorageService } from "@/infrastructure/upload/storage/FileStorageService.js";
export class UpdateMemberUseCase {
  constructor(
    private readonly repository: MemberRepository,
    private readonly storageProvider: FileStorageService,
  ) {}

  async execute(id: string, data: UpdateMemberDto, file?: Express.Multer.File) {
    const member = await this.repository.findById(id);

    let imageUrl: string | undefined;

    if (file) {
      imageUrl =
        await this.storageProvider.upload(file);
    }

    if (!member) {
      throw new NotFoundException("Member not found", "MEMBER_NOT_FOUND");
    }

    return this.repository.update(id, data);
  }
}
