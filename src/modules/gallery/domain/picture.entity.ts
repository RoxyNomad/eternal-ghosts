// src/modules/gallery/domain/picture.entity.ts
export interface PictureEntity {
    id: number;
    date: string;
    imageUrl: string;
    locationId: number;
    locationName?: string;
}
