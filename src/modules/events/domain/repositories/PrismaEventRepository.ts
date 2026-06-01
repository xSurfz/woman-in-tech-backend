import { prisma } from "@/infrastructure/database/prisma.js";

import { EventRepository } from "@/modules/events/domain/repositories/EventRepository.js";
import { EventEntity } from "@/modules/events/domain/entities/EventEntity.js";

import { EventMapper } from "../../infrastructure/repositories/mappers/EventMapper.js";

export class PrismaEventRepository implements EventRepository {
  async findAll(): Promise<EventEntity[]> {
    const events = await prisma.event.findMany({
      where: {
        deletedAt: null,
        isActive: true,
      },
      orderBy: {
        startsAt: "asc",
      },
    });

    return events.map(EventMapper.toDomain);
  }

  async findBySlug(slug: string): Promise<EventEntity | null> {
    const event = await prisma.event.findFirst({
      where: {
        slug,
        deletedAt: null,
        isActive: true,
      },
    });

    if (!event) {
      return null;
    }

    return EventMapper.toDomain(event);
  }
}
