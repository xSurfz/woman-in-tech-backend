import { prisma } from "@/infrastructure/database/prisma.js";

import { TestimonialRepository } from "../../domain/repositories/TestimonialRepository.js";

import { TestimonialEntity } from "../../domain/entities/TestimonialEntity.js";

import { TestimonialMapper } from "./mappers/TestimonialMapper.js";

import { CreateTestimonialDto } from "../../application/dto/CreateTestimonialDto.js";

import { UpdateTestimonialDto } from "../../application/dto/UpdateTestimonialDto.js";

export class PrismaTestimonialRepository implements TestimonialRepository {
  async findAll(): Promise<TestimonialEntity[]> {
    const testimonials = await prisma.testimonial.findMany({
      where: {
        deletedAt: null,
        isActive: true,
      },
      orderBy: {
        sortOrder: "asc",
      },
    });

    return testimonials.map(TestimonialMapper.toDomain);
  }

  async findById(id: string): Promise<TestimonialEntity | null> {
    const testimonial = await prisma.testimonial.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!testimonial) return null;

    return TestimonialMapper.toDomain(testimonial);
  }

  async create(data: CreateTestimonialDto): Promise<TestimonialEntity> {
    const testimonial = await prisma.testimonial.create({
      data,
    });

    return TestimonialMapper.toDomain(testimonial);
  }

  async update(
    id: string,
    data: UpdateTestimonialDto,
  ): Promise<TestimonialEntity> {
    const testimonial = await prisma.testimonial.update({
      where: { id },
      data,
    });

    return TestimonialMapper.toDomain(testimonial);
  }

  async softDelete(id: string): Promise<void> {
    await prisma.testimonial.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        isActive: false,
      },
    });
  }
}
