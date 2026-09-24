// src/modules/events/domain/events.entity.ts
export interface Event {
    id: number;
    title: string;
    date: Date;
    location?: string;
    description?: string;
}

export type CreateEventInput = Omit<Event, "id">;
