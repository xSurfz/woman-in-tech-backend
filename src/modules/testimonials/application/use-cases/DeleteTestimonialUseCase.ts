import { prisma } from "@/infrastructure/database/prisma.js";

import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

import { TestimonialRepository } from "../../domain/repositories/TestimonialRepository.js";

import { TestimonialNotFoundException } from "../../domain/exceptions/TestimonialNotFoundException.js";

export class DeleteTestimonialUseCase {
  constructor(private readonly repository: TestimonialRepository) {}

  async execute(id: string) {
    const testimonial = await this.repository.findById(id);

    if (!testimonial) {
      throw new TestimonialNotFoundException();
    }

    await this.repository.softDelete(id);
  }
}
