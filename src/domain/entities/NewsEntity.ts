// src/domain/entities/NewsEntity.ts
export interface News {
    id: number;
    title: string;
    content: string | null;
    imageUrl: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateNews {
    title: string;
    content: string;
    imageUrl: string;
}