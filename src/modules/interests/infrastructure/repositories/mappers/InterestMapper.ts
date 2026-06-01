import { Interest } from "@prisma/client";
import { InterestEntity } from "@/modules/interests/domain/entities/InterestEntity.js";

export class InterestMapper {
  static toDomain(raw: Interest): InterestEntity {
    return {
      id: raw.id,
      name: raw.name,
      description: raw.description,
      isActive: raw.isActive,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  }
}
