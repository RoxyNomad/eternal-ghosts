// src/modules/events/domain/events.repository.ts

import { Event, CreateEventInput } from "./events.entity";

export interface EventRepository {
    getAll(): Promise<Event[]>;
    create(input: CreateEventInput): Promise<Event>;
    delete(id: number): Promise<void>;
}