// src/modules/gallery/infrastructure/mappers/picture.mapper.ts

import { PictureEntity } from "../../domain/picture.entity";

export type PictureRow = {
    id: number;
    date: string;
    image_url: string;
    location_id: number;
    location_name?: string | null;
};

export class PictureMapper {
    static toDomain(row: PictureRow): PictureEntity {
        return {
            id: row.id,
            date: row.date,
            imageUrl: row.image_url,
            locationId: row.location_id,
            locationName: row.location_name ?? undefined,
        };
    }

    static toDomainList(rows: PictureRow[]): PictureEntity[] {
        return rows.map((row) => this.toDomain(row));
    }
}