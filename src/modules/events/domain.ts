// src/modules/events/domain.ts
export interface Event {
    id: number;
    title: string;
    date: string; // ISO
    location?: string;
    description?: string;
}

export type CreateEventInput = Omit<Event, "id">;
