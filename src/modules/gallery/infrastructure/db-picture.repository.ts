// src/modules/gallery/infrastructure/db-picture.repository.ts
import { PictureRepository } from "../domain/picture.repository";
import { PictureEntity } from "../domain/picture.entity";
import { query } from "@/utils/db";

export class DbPictureRepository implements PictureRepository {
  async getAll(): Promise<PictureEntity[]> {
    const res = await query(`
      SELECT
        p.id,
        p.date,
        p.image_url,
        p.location_id,
        l.name AS location_name
      FROM live_pictures p
      JOIN locations l ON l.id = p.location_id
      ORDER BY p.id ASC
    `);

    return res.rows.map((r: any) => ({
      id: r.id,
      date: r.date,
      imageUrl: r.image_url,
      locationId: r.location_id,
      locationName: r.location_name,
    }));
  }

async getByLocationId(locationId: number): Promise<PictureEntity[]> {
    const res = await query(
        `
          SELECT
            p.id,
            p.date,
            p.image_url,
            p.location_id,
            l.name AS location_name
          FROM live_pictures p
                 JOIN locations l ON l.id = p.location_id
          WHERE p.location_id = $1
          ORDER BY p.date DESC
        `,
        [locationId]
    );

    return res.rows.map((r: any) => ({
      id: r.id,
      date: r.date,
      imageUrl: r.image_url,
      locationId: r.location_id,
      locationName: r.location_name,
    }));
  }

  async create(picture: Omit<PictureEntity, "id">): Promise<PictureEntity> {
    const res = await query(
      `INSERT INTO live_pictures (date, location_id, image_url)
        VALUES ($1, $2, $3)
          RETURNING id, date, image_url, location_id`,
        [picture.date, picture.locationId, picture.imageUrl]
    );

    return res.rows[0];
  }

  async delete(id: number): Promise<void> {
    await query(`DELETE FROM live_pictures WHERE id = $1`, [id]);
  }
}