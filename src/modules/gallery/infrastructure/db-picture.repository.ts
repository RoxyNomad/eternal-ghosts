// src/modules/gallery/infrastructure/db-picture.repository.ts
import { PictureRepository } from "../domain/picture.repository";
import { CreatePictureInput, PictureEntity } from "../domain/picture.entity";
import { PictureMapper, PictureRow } from "./mappers/picture.mapper";
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

    return PictureMapper.toDomainList(
        res.rows as PictureRow[]
    );
  }

  async getByLocationId(locationId: number): Promise<PictureEntity[]> {
    const res = await query(
        `
          SELECT id, date, image_url, location_id
          FROM live_pictures
          WHERE location_id = $1
          ORDER BY date DESC
        `,
        [locationId]
    );

    return PictureMapper.toDomainList(
        res.rows as PictureRow[]
    );
  }

  async create(input: CreatePictureInput): Promise<PictureEntity> {
    const res = await query(
        `
          INSERT INTO live_pictures (date, location_id, image_url)
          VALUES ($1, $2, $3)
            RETURNING id, date, image_url, location_id
        `,
        [input.date, input.locationId, input.imageUrl]
    );

    return PictureMapper.toDomain(
        res.rows[0] as PictureRow
    );
  }

  async delete(id: number): Promise<void> {
    await query(
        `DELETE FROM live_pictures WHERE id = $1`,
        [id]
    );
  }
}