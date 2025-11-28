// src/domain/repositories/EventRepository.ts
import { Event } from "../entities/EventEntity";

export interface EventRepository {
  getAll(): Promise<Event[]>;
  create(event: Omit<Event, "id">): Promise<Event>;
  delete(id: number): Promise<void>;
}
