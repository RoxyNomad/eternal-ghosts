// src/domain/repositories/news.repository.ts
import { News, CreateNews } from './news.entity';

export interface NewsRepository {
    getAllPublished(): Promise<News[]>;
    create(data: CreateNews): Promise<News>;
}