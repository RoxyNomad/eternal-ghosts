// src/modules/biography/domain/biography.repository.ts
import {Biography, CreateBiography, UpdateBiography} from './biography.entity';

export interface BiographyRepository {
    getAllPublished(): Promise<Biography[]>;
    getLatestPublished(): Promise<Biography | null>;
    create(data: CreateBiography): Promise<Biography>;
    update(data: UpdateBiography): Promise<Biography>;
}