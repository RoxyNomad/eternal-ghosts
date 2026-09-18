import { Pool } from 'pg'; // Passt zu deiner NeonDB / Node Setup
import { Release } from '../domain/releases.entity';
import { ReleasesRepository } from '../domain/releases.repository';
import { ReleaseMapper } from './mappers/release.mapper';

export class DbReleasesRepository implements ReleasesRepository {
  constructor(private pool: Pool) {}

  async findAll(): Promise<Release[]> {
    const { rows } = await this.pool.query('SELECT * FROM releases ORDER BY release_date DESC');
    return rows.map(ReleaseMapper.toDomain);
  }

  async findById(id: string): Promise<Release | null> {
    const { rows } = await this.pool.query('SELECT * FROM releases WHERE id = $1', [id]);
    return rows.length ? ReleaseMapper.toDomain(rows[0]) : null;
  }

  async create(release: Omit<Release, 'id' | 'createdAt'>): Promise<Release> {
    const query = `
      INSERT INTO releases (
        title, release_type, release_date, cover_image_url, cover_image_public_id, audio_url, audio_public_id, description
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;
    const values = [
      release.title,
      release.type,
      release.releaseDate,
      release.coverImageUrl,
      release.coverImagePublicId,
      release.audioUrl ?? null,
      release.audioPublicId ?? null,
      release.description ?? null,
    ];

    const { rows } = await this.pool.query(query, values);
    return ReleaseMapper.toDomain(rows[0]);
  }

  async delete(id: string): Promise<void> {
    await this.pool.query('DELETE FROM releases WHERE id = $1', [id]);
  }
}