import { EventEntity } from "@/modules/events/domain/entities/EventEntity.js";

export interface GetEventsResponseDto {
  upcoming: EventEntity[];
  past: EventEntity[];
}
