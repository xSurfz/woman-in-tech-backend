import { prisma } from "@/infrastructure/database/prisma.js";

import { EventEntity } from "@/modules/events/domain/entities/EventEntity.js";

import { EventRepository } from "@/modules/events/domain/repositories/EventRepository.js";

import { EventMapper } from "./mappers/EventMapper.js";

export class PrismaEventRepository implements EventRepository {
  async findAll(): Promise<Event[]> {
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
}
