// src/modules/gallery/infrastructure/db-location.repository.ts

import { query } from "@/utils/db";
import { LocationRepository } from "../domain/location.repository";
import {
  LocationMapper,
  LocationRow,
  LocationWithCountRow
} from "./mappers/location.mapper";
import { LocationEntity, LocationWithCount } from "../domain/location.entity";

export class DbLocationRepository implements LocationRepository {
  async getAll(): Promise<LocationEntity[]> {
    const res = await query(`
      SELECT id, name, image_url
      FROM locations
      ORDER BY name ASC
    `);

    return LocationMapper.toDomainList(res.rows as LocationRow[]);
  }

  async getAllWithPictureCount(): Promise<LocationWithCount[]> {
    const res = await query(`
    SELECT 
      l.id,
      l.name,
      l.image_url,
      COUNT(p.id)::int AS picture_count
    FROM locations l
    LEFT JOIN live_pictures p ON p.location_id = l.id
    GROUP BY l.id
    ORDER BY l.name ASC
  `);

    return LocationMapper.toWithCountList(
        res.rows as LocationWithCountRow[]
    );
  }

  async create(data: Omit<LocationEntity, "id">): Promise<LocationEntity> {
    const res = await query(
        `INSERT INTO locations (name, image_url)
       VALUES ($1, $2)
       RETURNING id, name, image_url`,
        [data.name, data.imageUrl]
    );

    return LocationMapper.toDomain(res.rows[0] as LocationRow);
  }

  async update(
      id: number,
      data: Partial<Omit<LocationEntity, "id">>
  ): Promise<LocationEntity> {
    const updates: string[] = [];
    const values: (string | number | null)[] = [];

    let index = 1;

    if (data.name !== undefined) {
      updates.push(`name = $${index++}`);
      values.push(data.name);
    }

    if (data.imageUrl !== undefined) {
      updates.push(`image_url = $${index++}`);
      values.push(data.imageUrl);
    }

    values.push(id);

    const res = await query(
        `
      UPDATE locations
      SET ${updates.join(", ")}
      WHERE id = $${index}
      RETURNING id, name, image_url
    `,
        values
    );

    return LocationMapper.toDomain(
        res.rows[0] as LocationRow
    );
  }

  async delete(id: number): Promise<void> {
    await query(`DELETE FROM locations WHERE id = $1`, [id]);
  }
}