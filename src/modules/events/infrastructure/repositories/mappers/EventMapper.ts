import { Event as PrismaEvent } from "@prisma/client";

import { EventEntity } from "@/modules/events/domain/entities/EventEntity.js";

export class EventMapper {
  static toDomain(event: PrismaEvent): EventEntity {
    return {
      id: event.id,
      slug: event.slug,
      title: event.title,

      description: event.description,

      imageUrl: event.imageUrl,

      location: event.location,

      eventMode: event.eventMode,

      startsAt: event.startsAt,
      endsAt: event.endsAt,

      externalUrl: event.externalUrl,

      isFeatured: event.isFeatured,

      isActive: event.isActive,

      deletedAt: event.deletedAt,

      createdAt: event.createdAt,
      updatedAt: event.updatedAt,
    };
  }
}
