// src/modules/gallery/domain/LocationRepository.ts
import { Location } from "./Location";

export interface LocationRepository {
    getAll(): Promise<Location[]>;
    create(data: Omit<Location, "id">): Promise<Location>;
}
