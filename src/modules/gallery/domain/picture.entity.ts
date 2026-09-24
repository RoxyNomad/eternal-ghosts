// src/modules/gallery/domain/picture.entity.ts
export interface PictureEntity {
    id: number;
    date: string | null;
    imageUrl: string | null;
    locationId: number | null;
    locationName?: string | null;
}

export type CreatePictureInput = Omit<
    PictureEntity,
    "id" | "locationName"
>;