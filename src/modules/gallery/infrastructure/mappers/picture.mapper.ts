import { PictureEntity } from "../../domain/picture.entity";
import { SelectLivePictureDb } from "@/modules/events/infrastructure/db/events.schema";

export interface PictureWithLocationRow extends SelectLivePictureDb {
  locationName?: string;
}

export class PictureMapper {
  static toDomain(raw: PictureWithLocationRow): PictureEntity {
    return {
      id: raw.id,
      date: raw.date ?? null,
      imageUrl: raw.imageUrl ?? null,
      locationId: raw.locationId ?? null,
      locationName: raw.locationName ?? null,
    };
  }

  static toDomainList(rows: PictureWithLocationRow[]): PictureEntity[] {
    return rows.map(PictureMapper.toDomain);
  }
}