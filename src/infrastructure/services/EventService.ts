// src/infrastructure/services/EventService.ts
import { EventRepository } from "@/domain/repositories/EventRepository";
import { Event } from "@/domain/entities/EventEntity";

export class EventService {
  constructor(private repo: EventRepository) {}

  async getAllEvents(): Promise<Event[]> {
    return this.repo.getAll();
  }

  async createEvent(event: Omit<Event, "id">): Promise<Event> {
    return this.repo.create(event);
  }

  async deleteEvent(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
