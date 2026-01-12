// src/modules/events/repository.ts
import { query } from "@/utils/db";
import { Event, CreateEventInput } from "./types";

export async function getAllEvents(): Promise<Event[]> {
    const res = await query(
        `SELECT id, title, date, location
        FROM events 
        ORDER BY date ASC`);
    return res.rows.map((row: any) => ({
        id: row.id,
        title: row.title,
        date: row.date,
        location: row.location,
    }));
}

export async function createEvent(
    event: CreateEventInput
): Promise<Event> {
    const res = await query(
        `INSERT INTO events (title, date, location)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
        [event.title, event.date, event.location ?? null]
    );

    return res.rows[0];
}

export async function deleteEvent(id: number): Promise<void> {
    await query(`DELETE FROM events WHERE id = $1`, [id]);
}
