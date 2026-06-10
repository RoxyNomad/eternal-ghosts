// src/modules/gallery/domain/picture.repository.ts
import {
    PictureEntity,
    CreatePictureInput
} from "./picture.entity";

export interface PictureRepository {
    getAll(): Promise<PictureEntity[]>;

    getByLocationId(
        locationId: number
    ): Promise<PictureEntity[]>;

    create(
        input: CreatePictureInput
    ): Promise<PictureEntity>;

    delete(id: number): Promise<void>;
}