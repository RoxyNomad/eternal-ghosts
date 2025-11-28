// src/infrastructure/repositories/DbEventRepository.ts
import { EventRepository } from "@/domain/repositories/EventRepository";
import { Event } from "@/domain/entities/EventEntity";
import { query } from "@/utils/db";

export class DbEventRepository implements EventRepository {
  async getAll(): Promise<Event[]> {
    const res = await query(`SELECT * FROM events ORDER BY date ASC`);
    return res.rows.map((row: any) => ({
      id: row.id,
      title: row.title,
      date: row.date,
      location: row.location,
      description: row.description,
    }));
  }

  async create(event: Omit<Event, "id">): Promise<Event> {
    const res = await query(
      `INSERT INTO events (title, date, location, description)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [event.title, event.date, event.location || null, event.description || null]
    );
    return res.rows[0];
  }

  async delete(id: number): Promise<void> {
    await query(`DELETE FROM events WHERE id = $1`, [id]);
  }
}
