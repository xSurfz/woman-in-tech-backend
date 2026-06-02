import { prisma } from "@/infrastructure/database/prisma.js";

import { CreateProgramDto } from "../dto/CreateProgramDto.js";

import { ProgramRepository } from "@/modules/programs/domain/repositories/ProgramRepository.js";

import { ProgramSlugAlreadyExistsException } from "@/modules/programs/domain/exceptions/ProgramSlugAlreadyExistsException.js";
import { FileStorageService } from "@/infrastructure/upload/storage/FileStorageService.js";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");
}

export class CreateProgramUseCase {
  constructor(
    private readonly repository: ProgramRepository,
    private readonly storageProvider: FileStorageService,
  ) {}

  async execute(data: CreateProgramDto, file?: Express.Multer.File) {
    const slug = slugify(data.title);

    const existing = await this.repository.findBySlug(slug);

    let imageUrl: string | undefined;

    if (file) {
      imageUrl = await this.storageProvider.upload(file);
    }

    if (existing) {
      throw new ProgramSlugAlreadyExistsException();
    }

    return this.repository.create({
      ...data,
      slug,
      imageUrl,
    });
  }
}
