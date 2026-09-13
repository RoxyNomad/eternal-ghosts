// src/modules/releases/infrastructure/db-releases.repository.ts
import { ReleasesRepository } from "../domain/releases.repository";
import { Release } from "../domain/releases.entity";
import { ReleaseMapper } from "./mappers/release.mapper";
import { query } from "@/utils/db"; 

export class DbReleasesRepository implements ReleasesRepository {
  async findAll(): Promise<Release[]> {
    const result = await query(
      "SELECT * FROM releases ORDER BY release_date DESC"
    );
    return result.rows.map(ReleaseMapper.toDomain);
  }

  async findById(id: string): Promise<Release | null> {
    const result = await query(
      "SELECT * FROM releases WHERE id = $1",
      [id]
    );
    
    if (result.rows.length === 0) {
      return null;
    }
    
    return ReleaseMapper.toDomain(result.rows[0]);
  }

  async create(release: Omit<Release, 'id' | 'createdAt'>): Promise<Release> {
    const text = `
      INSERT INTO releases (title, release_type, release_date, cover_image_url, cover_image_public_id, description)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    
    const params = [
      release.title,
      release.type,
      release.releaseDate.toISOString(),
      release.coverImageUrl,
      release.coverImagePublicId,
      release.description ?? null
    ];

    const result = await query(text, params);
    return ReleaseMapper.toDomain(result.rows[0]);
  }

  async delete(id: string): Promise<void> {
    await query(
      "DELETE FROM releases WHERE id = $1",
      [id]
    );
  }
}
