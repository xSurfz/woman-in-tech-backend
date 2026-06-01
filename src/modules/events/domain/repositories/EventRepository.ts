import { EventEntity } from "../entities/EventEntity.js";

export interface EventRepository {
  findAll(): Promise<EventEntity[]>;
  findBySlug(slug: string): Promise<EventEntity | null>;
}
