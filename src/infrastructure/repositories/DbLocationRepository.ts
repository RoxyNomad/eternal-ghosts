// src/infrastructure/repositories/DbLocationRepository.ts
// src/infrastructure/repositories/DbLocationRepository.ts
import { LocationRepository } from "@/domain/repositories/LocationRepository";
import { LocationEntity } from "@/domain/entities/LocationEntity";
import { query } from "@/utils/db";

/**
 * PostgreSQL implementation of LocationRepository.
 * This repository links locations to live_pictures by name matching:
 *   live_pictures.location === locations.name
 *
 * It does NOT introduce a DB-level foreign key (so your upload flow remains unchanged).
 */
export class DbLocationRepository implements LocationRepository {
  async getAll(): Promise<(LocationEntity & { pictureCount: number })[]> {
    const res = await query(`SELECT id, name, image_url FROM locations ORDER BY name ASC`);
    const locations = res.rows.map((row: any) => ({
      id: row.id,
      name: row.name,
      imageUrl: row.image_url,
      pictureCount: 0,
    }));

    // For each location, count pictures from live_pictures matching by name
    for (const loc of locations) {
      const countRes = await query(`SELECT COUNT(*) FROM live_pictures WHERE location = $1`, [loc.name]);
      loc.pictureCount = Number(countRes.rows[0].count);
    }

    return locations;
  }

  async create(location: Omit<LocationEntity, "id">): Promise<LocationEntity> {
    const res = await query(
      `INSERT INTO locations (name, image_url) VALUES ($1, $2) RETURNING id, name, image_url`,
      [location.name, location.imageUrl]
    );

    const row = res.rows[0];
    return { id: row.id, name: row.name, imageUrl: row.image_url };
  }

  async update(id: number, data: Partial<Omit<LocationEntity, "id">>): Promise<LocationEntity> {
    const updates: string[] = [];
    const values: any[] = [];
    let idx = 1;

    if (data.name) {
      updates.push(`name = $${idx++}`);
      values.push(data.name);
    }
    if (data.imageUrl !== undefined) {
      updates.push(`image_url = $${idx++}`);
      values.push(data.imageUrl);
    }

    values.push(id);

    const res = await query(
      `UPDATE locations SET ${updates.join(", ")} WHERE id = $${idx} RETURNING id, name, image_url`,
      values
    );

    const row = res.rows[0];
    return { id: row.id, name: row.name, imageUrl: row.image_url };
  }

  async delete(id: number): Promise<void> {
    await query(`DELETE FROM locations WHERE id = $1`, [id]);
  }
}
