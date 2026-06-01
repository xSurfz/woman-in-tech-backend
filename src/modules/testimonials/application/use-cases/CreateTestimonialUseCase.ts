import { prisma } from "@/infrastructure/database/prisma.js";

import { CreateTestimonialDto } from "../dto/CreateTestimonialDto.js";

import { TestimonialRepository } from "../../domain/repositories/TestimonialRepository.js";

export class CreateTestimonialUseCase {
  constructor(private readonly repository: TestimonialRepository) {}

  async execute(data: CreateTestimonialDto) {
    return this.repository.create(data);
  }
}
