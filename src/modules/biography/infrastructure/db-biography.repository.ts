// src/modules/biography/infrastructure/db-biography.repository.ts
import { query } from "@/utils/db";
import {
    Biography,
    CreateBiography,
    UpdateBiography
} from "@/modules/biography/domain/biography.entity";
import {BiographyRow, toBiography} from "@/modules/biography/infrastructure/mappers/biography.mapper";
import { BiographyRepository } from "@/modules/biography/domain/biography.repository";

export class DbBiographyRepository implements BiographyRepository {
    async getAllPublished(): Promise<Biography[]> {
        const res = await query<BiographyRow>(`
            SELECT id, title, content, published_at, created_at, updated_at
            FROM biography
        `);

        return res.rows.map(toBiography);
    }

    async getLatestPublished(): Promise<Biography | null> {
        const res = await query<BiographyRow>(`
      SELECT id, title, content, published_at, created_at, updated_at
      FROM biography
      ORDER BY published_at DESC
      LIMIT 1
  `);

        if (res.rows.length === 0) {
            return null;
        }

        return toBiography(res.rows[0]);
    }

    async create(data: CreateBiography): Promise<Biography> {
        const res = await query<BiographyRow>(`
            INSERT INTO biography (title, content)
            VALUES ($1, $2)
                RETURNING id, title, content, published_at, created_at, updated_at
        `, [data.title, data.content]);

        return toBiography(res.rows[0]);
    }

    async update(data: UpdateBiography): Promise<Biography> {
        const res = await query<BiographyRow>(`
        UPDATE biography
        SET title = $1,
            content = $2,
            updated_at = now()
        WHERE id = $3
        RETURNING id, title, content, published_at, created_at, updated_at
        `,
            [data.title, data.content, data.id]
        );

        return toBiography(res.rows[0]);
    }
}
