// src/modules/gallery/domain/picture.repository.ts
import { PictureEntity } from "./picture.entity";

export interface PictureRepository {
    getAll(): Promise<PictureEntity[]>;
    getByLocationId(locationId: number): Promise<PictureEntity[]>;
    create(picture: Omit<PictureEntity, "id">): Promise<PictureEntity>;
    delete(id: number): Promise<void>;
}
