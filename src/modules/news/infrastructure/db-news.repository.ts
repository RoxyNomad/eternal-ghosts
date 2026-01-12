// src/infrastructure/repositories/db-news.repository.ts
import { query } from "@/utils/db";
import { CreateNews, News } from "@/modules/news/domain/news.entity";
import { NewsRepository } from "@/modules/news/domain/news.repository";

export class DbNewsRepository implements NewsRepository {
    async getAllPublished(): Promise<News[]> {
        const res = await query(`
            SELECT id, title, content, image_url, published_at
            FROM news
            ORDER BY published_at DESC
        `);

        return res.rows.map(row => ({
            id: row.id,
            title: row.title,
            content: row.content,
            imageUrl: row.image_url,
            publishedAt: row.published_at,
        }));
    }

    async create(data: CreateNews): Promise<News> {
        const res = await query(`
            INSERT INTO news (title, content, image_url)
            VALUES ($1, $2, $3)
                RETURNING id, title, content, image_url, published_at
        `, [data.title, data.content, data.imageUrl]);

        return {
            id: res.rows[0].id,
            title: res.rows[0].title,
            content: res.rows[0].content,
            imageUrl: res.rows[0].image_url,
            publishedAt: res.rows[0].published_at,
        };
    }
}
