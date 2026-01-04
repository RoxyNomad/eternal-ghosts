// src/modules/events/repository.ts
import { query } from "@/utils/db";
import { Event, CreateEventInput } from "./domain";

export async function getAllEvents(): Promise<Event[]> {
    const res = await query(`SELECT * FROM events ORDER BY date ASC`);
    return res.rows.map((row: any) => ({
        id: row.id,
        title: row.title,
        date: row.date,
        location: row.location,
        description: row.description,
    }));
}

export async function createEvent(
    event: CreateEventInput
): Promise<Event> {
    const res = await query(
        `INSERT INTO events (title, date, location, description)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
        [event.title, event.date, event.location ?? null, event.description ?? null]
    );

    return res.rows[0];
}

export async function deleteEvent(id: number): Promise<void> {
    await query(`DELETE FROM events WHERE id = $1`, [id]);
}
