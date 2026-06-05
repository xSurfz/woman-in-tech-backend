import { prisma } from "@/infrastructure/database/prisma.js";

import { UpdateTestimonialDto } from "../dto/UpdateTestimonialDto.js";

import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

import { TestimonialNotFoundException } from "../../domain/exceptions/TestimonialNotFoundException.js";
import { FileStorageService } from "@/infrastructure/upload/storage/FileStorageService.js";
import { TestimonialRepository } from "../../domain/repositories/TestimonialRepository.js";

export class UpdateTestimonialUseCase {
  constructor(
    private readonly repository: TestimonialRepository,
    private readonly storageProvider: FileStorageService
  ) {}

  async execute(id: string, data: UpdateTestimonialDto, file?: Express.Multer.File) {
    const testimonial = await this.repository.findById(id);

    if (file) {
      data.imageUrl =
        await this.storageProvider.upload(file);
    }

    if (!testimonial) {
      throw new TestimonialNotFoundException();
    }

    return this.repository.update(id, data);
  }
}
