import { eq, asc, count, sql } from "drizzle-orm";
import { db } from "@/infrastructure/neon";
import { locationsTable, livePicturesTable } from "@/modules/events/infrastructure/db/events.schema";
import { LocationRepository } from "../domain/location.repository";
import { LocationMapper } from "./mappers/location.mapper";
import { LocationEntity, LocationWithCount } from "../domain/location.entity";

export class DbLocationRepository implements LocationRepository {
  async getAll(): Promise<LocationEntity[]> {
    const rows = await db
      .select()
      .from(locationsTable)
      .orderBy(asc(locationsTable.name));

    return LocationMapper.toDomainList(rows);
  }

  async getAllWithPictureCount(): Promise<LocationWithCount[]> {
    const rows = await db
      .select({
        id: locationsTable.id,
        name: locationsTable.name,
        imageUrl: locationsTable.imageUrl,
        pictureCount: sql<number>`count(${livePicturesTable.id})::int`,
      })
      .from(locationsTable)
      .leftJoin(
        livePicturesTable,
        eq(livePicturesTable.locationId, locationsTable.id)
      )
      .groupBy(locationsTable.id)
      .orderBy(asc(locationsTable.name));

    return LocationMapper.toWithCountList(rows);
  }

  async create(data: Omit<LocationEntity, "id">): Promise<LocationEntity> {
    const [inserted] = await db
      .insert(locationsTable)
      .values({
        name: data.name,
        imageUrl: data.imageUrl ?? null,
      })
      .returning();

    return LocationMapper.toDomain(inserted);
  }

  async update(
    id: number,
    data: Partial<Omit<LocationEntity, "id">>
  ): Promise<LocationEntity> {
    const updatePayload: Partial<typeof locationsTable.$inferInsert> = {};

    if (data.name !== undefined) {
      updatePayload.name = data.name;
    }

    if (data.imageUrl !== undefined) {
      updatePayload.imageUrl = data.imageUrl;
    }

    const [updated] = await db
      .update(locationsTable)
      .set(updatePayload)
      .where(eq(locationsTable.id, id))
      .returning();

    return LocationMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await db.delete(locationsTable).where(eq(locationsTable.id, id));
  }
}