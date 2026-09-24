import { eq, asc, desc } from "drizzle-orm";
import { db } from "@/infrastructure/neon";
import {
  livePicturesTable,
  locationsTable,
} from "@/modules/events/infrastructure/db/events.schema";
import { PictureRepository } from "../domain/picture.repository";
import { CreatePictureInput, PictureEntity } from "../domain/picture.entity";
import { PictureMapper } from "./mappers/picture.mapper";

export class DbPictureRepository implements PictureRepository {
  async getAll(): Promise<PictureEntity[]> {
    const rows = await db
      .select({
        id: livePicturesTable.id,
        date: livePicturesTable.date,
        imageUrl: livePicturesTable.imageUrl,
        locationId: livePicturesTable.locationId,
        locationName: locationsTable.name,
      })
      .from(livePicturesTable)
      .innerJoin(
        locationsTable,
        eq(locationsTable.id, livePicturesTable.locationId)
      )
      .orderBy(asc(livePicturesTable.id));

    return PictureMapper.toDomainList(rows);
  }

  async getByLocationId(locationId: number): Promise<PictureEntity[]> {
    const rows = await db
      .select()
      .from(livePicturesTable)
      .where(eq(livePicturesTable.locationId, locationId))
      .orderBy(desc(livePicturesTable.date));

    return PictureMapper.toDomainList(rows);
  }

  async create(input: CreatePictureInput): Promise<PictureEntity> {
    const [inserted] = await db
      .insert(livePicturesTable)
      .values({
        date: input.date,
        locationId: input.locationId,
        imageUrl: input.imageUrl,
      })
      .returning();

    return PictureMapper.toDomain(inserted);
  }

  async delete(id: number): Promise<void> {
    await db
      .delete(livePicturesTable)
      .where(eq(livePicturesTable.id, id));
  }
}