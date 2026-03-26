// src/modules/news/domain/news.entity.ts
export interface News {
    id: number;
    title: string;
    content: string;
    imageUrl: string | null;
    publishedAt: string;
}

export interface CreateNews {
    title: string;
    content: string;
    imageUrl: string;
}