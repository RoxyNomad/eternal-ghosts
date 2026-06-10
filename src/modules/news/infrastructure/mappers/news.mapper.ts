// src/modules/news/infrastructure/news.mapper.ts

import { News } from "../../domain/news.entity";

export interface NewsRow {
    id: number;
    title: string;
    content: string;
    image_url: string | null;
    published_at: string;
}

export class NewsMapper {
    static toDomain(row: NewsRow): News {
        return {
            id: row.id,
            title: row.title,
            content: row.content,
            imageUrl: row.image_url,
            publishedAt: row.published_at,
        };
    }

    static toDomainList(rows: NewsRow[]): News[] {
        return rows.map((row) => this.toDomain(row));
    }
}