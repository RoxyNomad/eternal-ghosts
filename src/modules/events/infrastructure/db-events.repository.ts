// src/modules/events/infrastructure/db-events.repository.ts

import { query } from "@/utils/db";
import { CreateEventInput, Event } from "../domain/events.entity";
import { EventMapper, EventRow } from "./mappers/event.mapper";
import { EventRepository } from "@/modules/events/domain/events.repository";

export class DbEventRepository implements EventRepository {
    async getAll(): Promise<Event[]> {
        const res = await query(`
            SELECT id, title, date, location
            FROM events
            ORDER BY date ASC
        `);

        return EventMapper.toDomainList(res.rows as EventRow[]);
    }

    async create(input: CreateEventInput): Promise<Event> {
        const res = await query(
            `
                INSERT INTO events (title, date, location)
                VALUES ($1, $2, $3)
                    RETURNING id, title, date, location
            `,
            [input.title, input.date, input.location ?? null]
        );

        return EventMapper.toDomain(res.rows[0] as EventRow);
    }

    async delete(id: number): Promise<void> {
        await query(`DELETE FROM events WHERE id = $1`, [id]);
    }
}