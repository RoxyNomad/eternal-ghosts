// src/modules/biography/infrastructure/db-biography.repository.ts
import { query } from "@/utils/db";
import {
    Biography,
    CreateBiography,
    UpdateBiography
} from "@/modules/biography/domain/biography.entity";
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

    async getLatestPublished(): Promise<Biography | null> {
        const res = await query(`
      SELECT id, title, content, published_at, created_at, updated_at
      FROM biography
      ORDER BY published_at DESC
      LIMIT 1
  `);

        if (res.rows.length === 0) {
            return null;
        }

        const row = res.rows[0];

        return {
            id: row.id,
            title: row.title,
            content: row.content,
            publishedAt: row.published_at,
            createdAt: row.created_at,
            updatedAt: row.updated_at,
        };
    }

    async create(data: CreateBiography): Promise<Biography> {
        const res = await query(`
            INSERT INTO biography (title, content)
            VALUES ($1, $2)
                RETURNING id, title, content, published_at, created_at, updated_at
        `, [data.title, data.content]);

        const row = res.rows[0];

        return {
            id: row.id,
            title: row.title,
            content: row.content,
            publishedAt: row.published_at,
            createdAt: row.created_at,
            updatedAt: row.updated_at
        };
    }

    async update(data: UpdateBiography): Promise<Biography> {
        const res = await query(`
        UPDATE biography
        SET title = $1,
            content = $2,
            updated_at = now()
        WHERE id = $3
        RETURNING id, title, content, published_at, created_at, updated_at
        `,
            [data.title, data.content, data.id]
        );

        const row = res.rows[0];

        return {
            id: row.id,
            title: row.title,
            content: row.content,
            publishedAt: row.pulished_at,
            createdAt: row.created_at,
            updatedAt: row.updated_at,
        };
    }
}
