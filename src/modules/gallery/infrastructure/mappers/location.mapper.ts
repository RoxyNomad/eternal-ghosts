// src/modules/gallery/infrastructure/mappers/location.mapper.ts
import {
    LocationEntity,
    LocationWithCount,
} from "../../domain/location.entity";

export type LocationRow = {
    id: number;
    name: string;
    image_url: string | null;
};

export type LocationWithCountRow = {
    id: number;
    name: string;
    image_url: string | null;
    picture_count: number;
};

export class LocationMapper {
    static toDomain(row: LocationRow): LocationEntity {
        return {
            id: row.id,
            name: row.name,
            imageUrl: row.image_url,
        };
    }

    static toDomainList(rows: LocationRow[]): LocationEntity[] {
        return rows.map((r) => this.toDomain(r));
    }

    static toWithCount(row: LocationWithCountRow): LocationWithCount {
        return {
            id: row.id,
            name: row.name,
            imageUrl: row.image_url,
            pictureCount: row.picture_count,
        };
    }

    static toWithCountList(
        rows: LocationWithCountRow[]
    ): LocationWithCount[] {
        return rows.map((r) => this.toWithCount(r));
    }
}