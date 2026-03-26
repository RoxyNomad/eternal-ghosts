// src/modules/biography/domain/biography.repository.ts
import { Biography } from './biography.entity';

export interface BiographyRepository {
    getAllPublished(): Promise<Biography[]>;
    create(data: Biography): Promise<Biography>;
}