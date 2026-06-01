import { EventNotFoundException } from "@/modules/events/domain/errors/EventNotFoundException.js";

import { EventRepository } from "@/modules/events/domain/repositories/EventRepository.js";

import { GetEventBySlugDto } from "../dto/GetEventBySlugDto.js";

export class GetEventBySlugUseCase {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(slug: string): Promise<GetEventBySlugDto> {
    const event = await this.eventRepository.findBySlug(slug);

    if (!event) {
      throw new EventNotFoundException();
    }

    return event;
  }
}
