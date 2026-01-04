// src/modules/gallery/domain/Location.ts
export interface Location {
    id: number;
    name: string;
    imageUrl: string | null;
    pictureCount?: number;
}
