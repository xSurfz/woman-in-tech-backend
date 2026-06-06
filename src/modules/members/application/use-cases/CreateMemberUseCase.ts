import { CreateMemberDto } from "../dto/CreateMemberDto.js";
import { MemberRepository } from "../../domain/repositories/MemberRepository.js";
import { ConflictException } from "@/core/exceptions/ConflictException.js";
import { FileStorageService } from "@/infrastructure/upload/storage/FileStorageService.js";

export class CreateMemberUseCase {
  constructor(
    private readonly repository: MemberRepository,
    private readonly storageProvider: FileStorageService,
  ) {}

  async execute(data: CreateMemberDto, file?: Express.Multer.File) {
    if (data.email) {
      const existing = await this.repository.findByEmail(data.email);

      if (existing) {
        throw new ConflictException(
          "Member email already exists",
          "MEMBER_EMAIL_ALREADY_EXISTS",
        );
      }
    }

    console.log("Este es el file", file);

    let imageUrl: string | undefined;

    if (file) {
      imageUrl = await this.storageProvider.upload(file);
    }

    return this.repository.create({
      ...data,
      imageUrl,
    });
  }
}
