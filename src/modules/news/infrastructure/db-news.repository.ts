// src/infrastructure/repositories/db-news.repository.ts
import { query } from "@/utils/db";
import { CreateNews, News } from "@/modules/news/domain/news.entity";
import { NewsRepository } from "@/modules/news/domain/news.repository";
import {
    NewsMapper,
    NewsRow,
} from "./mappers/news.mapper";

export class DbNewsRepository implements NewsRepository {
    async getAllPublished(): Promise<News[]> {
        const res = await query(`
            SELECT id, title, content, image_url, published_at
            FROM news
            ORDER BY published_at DESC
        `);

        return NewsMapper.toDomainList(
            res.rows as NewsRow[]
        );
    }

    async create(data: CreateNews): Promise<News> {
        const res = await query(
            `
                INSERT INTO news (title, content, image_url)
                VALUES ($1, $2, $3)
                    RETURNING id, title, content, image_url, published_at
            `,
            [data.title, data.content, data.imageUrl]
        );

        return NewsMapper.toDomain(
            res.rows[0] as NewsRow
        );
    }
}