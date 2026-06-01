import { Program } from "@prisma/client";
import { ProgramEntity } from "@/modules/programs/domain/entities/ProgramEntity.js";

export class ProgramMapper {
  static toDomain(program: Program): ProgramEntity {
    return {
      id: program.id,
      slug: program.slug,
      title: program.title,
      description: program.description,
      imageUrl: program.imageUrl,
      actionText: program.actionText,
      actionUrl: program.actionUrl,
      sortOrder: program.sortOrder,
      isFeatured: program.isFeatured,
      isActive: program.isActive,
      deletedAt: program.deletedAt,
      createdAt: program.createdAt,
      updatedAt: program.updatedAt,
    };
  }
}
