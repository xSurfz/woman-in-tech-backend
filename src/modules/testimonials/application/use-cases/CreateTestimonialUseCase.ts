import { prisma } from "@/infrastructure/database/prisma.js";

import { CreateTestimonialDto } from "../dto/CreateTestimonialDto.js";
import { FileStorageService } from "@/infrastructure/upload/storage/FileStorageService.js";
import { TestimonialRepository } from "../../domain/repositories/TestimonialRepository.js";

export class CreateTestimonialUseCase {
  constructor(
    private readonly repository: TestimonialRepository,
    private readonly storageProvider: FileStorageService
  ) {}

  async execute(data: CreateTestimonialDto, file?: Express.Multer.File) {
    let imageUrl: string | undefined;

    if (file) {
      imageUrl =
        await this.storageProvider.upload(file);
    }

    return this.repository.create({
      ...data,
      imageUrl,
    });
  }
}
