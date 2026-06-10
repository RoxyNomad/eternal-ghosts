// src/modules/biography/infrastructure/mappers/biography.mapper.ts

import { Biography } from "../../domain/biography.entity";

export interface BiographyRow {
    id: number;
    title: string;
    content: string;
    published_at: string;
    created_at: string;
    updated_at: string;
}

export function toBiography(row: BiographyRow): Biography {
    return {
        id: row.id,
        title: row.title,
        content: row.content,
        publishedAt: row.published_at,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
    };
}