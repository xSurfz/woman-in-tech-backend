import { GetEventsResponseDto } from "@/modules/events/application/dto/GetEventsResponseDto.js";
import { EventRepository } from "@/modules/events/domain/repositories/EventRepository.js";

export class GetEventsUseCase {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(): Promise<GetEventsResponseDto> {
    const events = await this.eventRepository.findAll();

    const now = new Date();

    return {
      upcoming: events.filter((event) => event.startsAt >= now),

      past: events.filter((event) => event.startsAt < now),
    };
  }
}
