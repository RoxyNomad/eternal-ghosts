// src/modules/gallery/domain/location.entity.ts
export interface LocationEntity {
    id: number;
    name: string;
    imageUrl: string | null;
    pictureCount?: number;
}
