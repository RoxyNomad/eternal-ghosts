// src/modules/events/infrastructure/mappers/event.mapper.ts

import { Event } from "../../domain/events.entity";

export interface EventRow {
    id: number;
    title: string;
    date: string;
    location: string | null;
}

export class EventMapper {
    static toDomain(row: EventRow): Event {
        return {
            id: row.id,
            title: row.title,
            date: row.date,
            location: row.location ?? undefined,
        };
    }

    static toDomainList(rows: EventRow[]): Event[] {
        return rows.map((r) => this.toDomain(r));
    }
}