import { Testimonial } from "@prisma/client";
import { TestimonialEntity } from "@/modules/testimonials/domain/entities/TestimonialEntity.js";

export class TestimonialMapper {
  static toDomain(raw: Testimonial): TestimonialEntity {
    return {
      id: raw.id,
      fullName: raw.fullName,
      company: raw.company,
      role: raw.role,
      content: raw.content,
      imageUrl: raw.imageUrl,
      sortOrder: raw.sortOrder,
      isActive: raw.isActive,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  }
}
