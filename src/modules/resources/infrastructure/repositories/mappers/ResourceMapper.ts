import { Resource } from "@prisma/client";
import { ResourceEntity } from "@/modules/resources/domain/entities/ResourceEntity.js";

export class ResourceMapper {
  static toDomain(resource: Resource): ResourceEntity {
    return {
      id: resource.id,
      title: resource.title,
      slug: resource.slug,
      description: resource.description,
      imageUrl: resource.imageUrl,
      url: resource.url,
      type: resource.type,
      isFeatured: resource.isFeatured,
      isActive: resource.isActive,
      createdAt: resource.createdAt,
      updatedAt: resource.updatedAt,
    };
  }
}
