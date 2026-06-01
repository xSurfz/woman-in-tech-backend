import { prisma } from "@/infrastructure/database/prisma.js";

import { UpdateTestimonialDto } from "../dto/UpdateTestimonialDto.js";

import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

import { TestimonialNotFoundException } from "../../domain/exceptions/TestimonialNotFoundException.js";

import { TestimonialRepository } from "../../domain/repositories/TestimonialRepository.js";

export class UpdateTestimonialUseCase {
  constructor(private readonly repository: TestimonialRepository) {}

  async execute(id: string, data: UpdateTestimonialDto) {
    const testimonial = await this.repository.findById(id);

    if (!testimonial) {
      throw new TestimonialNotFoundException();
    }

    return this.repository.update(id, data);
  }
}
