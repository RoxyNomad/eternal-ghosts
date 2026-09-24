import { eq, desc } from 'drizzle-orm';
import { db } from '../../../infrastructure/neon';
import { releasesTable } from './db/releases.schema';
import { Release } from '../domain/releases.entity';
import { ReleasesRepository } from '../domain/releases.repository';
import { ReleaseMapper } from './mappers/release.mapper';

export class DbReleasesRepository implements ReleasesRepository {
  async findAll(): Promise<Release[]> {
    const rows = await db
      .select()
      .from(releasesTable)
      .orderBy(desc(releasesTable.createdAt));
    return rows.map(ReleaseMapper.toDomain);
  }

  async findById(id: string): Promise<Release | null> {
    const rows = await db
      .select()
      .from(releasesTable)
      .where(eq(releasesTable.id, id));
    return rows.length ? ReleaseMapper.toDomain(rows[0]) : null;
  }

  async create(release: Omit<Release, 'id' | 'createdAt'>): Promise<Release> {
    const [inserted] = await db
      .insert(releasesTable)
      .values({
        title: release.title,
        releaseType: release.type,
        releaseDate: release.releaseDate.toISOString().split('T')[0],
        coverImageUrl: release.coverImageUrl,
        coverImagePublicId: release.coverImagePublicId,
        description: release.description || null,
        audioUrl: release.audioUrl || null,
        audioPublicId: release.audioPublicId || null,
      })
      .returning();
    return ReleaseMapper.toDomain(inserted);
  }

  async delete(id: string): Promise<void> {
    await db.delete(releasesTable).where(eq(releasesTable.id, id));
  }
}