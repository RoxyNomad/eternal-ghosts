import { eq, desc } from 'drizzle-orm';
import { db } from '@/infrastructure/neon';
import { biographyTable } from './db/biography.schema';
import {
  Biography,
  CreateBiography,
  UpdateBiography,
} from '@/modules/biography/domain/biography.entity';
import { toBiography } from '@/modules/biography/infrastructure/mappers/biography.mapper';
import { BiographyRepository } from '@/modules/biography/domain/biography.repository';

export class DbBiographyRepository implements BiographyRepository {
  async getAllPublished(): Promise<Biography[]> {
    const rows = await db.select().from(biographyTable);
    return rows.map(toBiography);
  }

  async getLatestPublished(): Promise<Biography | null> {
    const rows = await db
      .select()
      .from(biographyTable)
      .orderBy(desc(biographyTable.publishedAt))
      .limit(1);

    if (rows.length === 0) {
      return null;
    }

    return toBiography(rows[0]);
  }

  async create(data: CreateBiography): Promise<Biography> {
    const [inserted] = await db
      .insert(biographyTable)
      .values({
        title: data.title,
        content: data.content,
      })
      .returning();

    return toBiography(inserted);
  }

  async update(data: UpdateBiography): Promise<Biography> {
    const [updated] = await db
      .update(biographyTable)
      .set({
        title: data.title,
        content: data.content,
        updatedAt: new Date(),
      })
      .where(eq(biographyTable.id, data.id))
      .returning();

    return toBiography(updated);
  }
}