// src/modules/biography/infrastructure/db-biography.repository.ts
import { query } from "@/utils/db";
import { Biography } from "@/modules/biography/domain/biography.entity";
import { BiographyRepository } from "@/modules/biography/domain/biography.repository";

export class DbBiographyRepository implements BiographyRepository {
    async getAllPublished(): Promise<Biography[]> {
        const res = await query(`
            SELECT id, title, content, published_at, created_at, updated_at
            FROM biography
        `);

        return res.rows.map(row => ({
            id: row.id,
            title: row.title,
            content: row.content,
            publishedAt: row.published_at,
            createdAt: row.created_at,
            updatedAt: row.updated_at,
        }));
    }

    async create(data: Biography): Promise<Biography> {
        const res = await query(`
            INSERT INTO biography (title, content)
            VALUES ($1, $2)
                RETURNING id, title, content, published_at, created_at, updated_at
        `, [data.title, data.content]);

        return {
            id: res.rows[0].id,
            title: res.rows[0].title,
            content: res.rows[0].content,
            publishedAt: res.rows[0].published_at,
            createdAt: res.rows[0].created_at,
            updatedAt: res.rows[0].updated_at
        };
    }
}
