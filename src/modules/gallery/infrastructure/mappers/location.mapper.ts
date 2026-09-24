import { LocationEntity, LocationWithCount } from "../../domain/location.entity";
import { SelectLocationDb } from "@/modules/events/infrastructure/db/events.schema";

export interface LocationWithCountRow extends SelectLocationDb {
  pictureCount: number;
}

export class LocationMapper {
  static toDomain(raw: SelectLocationDb): LocationEntity {
    return {
      id: raw.id,
      name: raw.name,
      imageUrl: raw.imageUrl ?? null,
    };
  }

  static toDomainList(rows: SelectLocationDb[]): LocationEntity[] {
    return rows.map(LocationMapper.toDomain);
  }

  static toWithCountList(rows: LocationWithCountRow[]): LocationWithCount[] {
    return rows.map((row) => ({
      ...LocationMapper.toDomain(row),
      pictureCount: row.pictureCount,
    }));
  }
}