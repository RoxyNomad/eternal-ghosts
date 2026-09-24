import { desc, eq } from "drizzle-orm";
import { db } from "@/infrastructure/neon";
import { mediaTable } from "./db/media.schema";
import { MediaRepository } from "../domain/media.repository";
import { CreateMediaInput, MediaEntity } from "../domain/media.entity";
import { MediaMapper } from "./mappers/media.mapper";

export class DbMediaRepository implements MediaRepository {
  async getAll(): Promise<MediaEntity[]> {
    const rows = await db
      .select()
      .from(mediaTable)
      .orderBy(desc(mediaTable.createdAt));

    return MediaMapper.toDomainList(rows);
  }

  async create(input: CreateMediaInput): Promise<MediaEntity> {
    const [inserted] = await db
      .insert(mediaTable)
      .values({
        title: input.title,
        youtubeUrl: input.youtubeUrl,
        description: input.description ?? null,
      })
      .returning();

    return MediaMapper.toDomain(inserted);
  }

  async delete(id: number): Promise<void> {
    await db
      .delete(mediaTable)
      .where(eq(mediaTable.id, id));
  }
}