// src/modules/events/domain/events.entity.ts
export interface Event {
    id: number;
    title: string;
    date: Date;
    location?: string;
    description?: string;
}

export interface CreateEventInput {
    title: string;
    date: string | Date;
    location?: string;
    description?: string;
}
