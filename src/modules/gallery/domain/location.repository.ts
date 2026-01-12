// src/modules/gallery/domain/location.repository.ts
import { LocationEntity } from "./location.entity";

export interface LocationRepository {
    getAll(): Promise<(LocationEntity & { pictureCount: number })[]>;
    create(data: Omit<LocationEntity, "id">): Promise<LocationEntity>;
    update(id: number, data: Partial<Omit<LocationEntity, "id">>): Promise<LocationEntity>;
    delete(id: number): Promise<void>;
}
