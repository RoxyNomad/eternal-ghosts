// src/infrastructure/repositories/DbPictureRepository.ts
import { LivePictureRepository } from "@/domain/repositories/LivePictureRepository";
import { LivePicture } from "@/domain/entities/PictureEntity";
import { query } from "@/utils/db";

/**
 * PostgreSQL implementation of LivePictureRepository using node-pg.
 * This repository keeps your existing upload logic intact.
 */
export class DbPictureRepository implements LivePictureRepository {
  async getAll(): Promise<LivePicture[]> {
    const res = await query(`SELECT id, date, location, image_url FROM live_pictures ORDER BY id ASC`);
    return res.rows.map((r: any) => ({
      id: r.id,
      date: r.date,
      location: r.location,
      imageUrl: r.image_url,
    }));
  }

  async create(picture: Omit<LivePicture, "id">): Promise<LivePicture> {
    const res = await query(
      `INSERT INTO live_pictures (location, date, image_url) VALUES ($1, $2, $3) RETURNING id, date, location, image_url`,
      [picture.location, picture.date, picture.imageUrl]
    );

    const row = res.rows[0];
    return {
      id: row.id,
      date: row.date,
      location: row.location,
      imageUrl: row.image_url,
    };
  }

  async delete(id: number): Promise<void> {
    await query(`DELETE FROM live_pictures WHERE id = $1`, [id]);
  }

  async getLocations(): Promise<string[]> {
    const res = await query(`SELECT DISTINCT location FROM live_pictures ORDER BY location ASC`);
    return res.rows.map((r: any) => r.location);
  }

  async getByLocation(location: string): Promise<LivePicture[]> {
    const res = await query(
      `SELECT id, date, location, image_url FROM live_pictures WHERE location = $1 ORDER BY date DESC`,
      [location]
    );

    return res.rows.map((r: any) => ({
      id: r.id,
      date: r.date,
      location: r.location,
      imageUrl: r.image_url,
    }));
  }
}
