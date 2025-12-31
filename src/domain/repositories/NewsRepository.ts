// src/domain/repositories/NewsRepository.ts
import { News } from '../entities/NewsEntity';

export interface NewsRepository {
    getAllPublished(): Promise<News[]>;
}