// src/modules/gallery/application/read-models/picture.read-model.ts
export interface PictureReadModel {
    id: number;
    date: string;
    imageUrl: string;
    locationId: number;
    locationName: string;
}
