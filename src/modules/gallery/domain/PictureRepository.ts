// src/modules/gallery/domain/PictureRepository.ts
import { Picture } from "./Picture";

export interface PictureRepository {
    getAll(): Promise<Picture[]>;
    getByLocation(location: string): Promise<Picture[]>;
    create(picture: Omit<Picture, "id">): Promise<Picture>;
    delete(id: number): Promise<void>;
}
