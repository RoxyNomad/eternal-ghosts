// src/infrastructure/repositories/DbNewsRepository.ts
import { query } from "@/utils/db";
import { CreateNews, News } from "@/domain/entities/NewsEntity";
import { NewsRepository } from "@/domain/repositories/NewsRepository";

export class DbNewsRepository implements NewsRepository {
    async getAllPublished(): Promise<News[]> {
        const res = await query(`
            SELECT
                id,
                title,
                content,
                image_url,
                published_at,
                created_at,
                updated_at
            FROM news
            ORDER BY published_at DESC
        `);

        return res.rows.map(row => ({
            id: row.id,
            title: row.title,
            content: row.content,
            imageUrl: row.image_url,
            publishedAt: row.published_at,
            createdAt: row.created_at,
            updatedAt: row.updated_at,
        }));
    }

    async create(data: CreateNews) {
        const res = await query(
            `
            INSERT INTO news (title, content, image_url)
            VALUES ($1, $2, $3)
            RETURNING *
            `,
            [data.title, data.content, data.imageUrl]
        );

        return res.rows[0];
    }
}
