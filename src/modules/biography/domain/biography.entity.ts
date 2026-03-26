// src/modules/biography/domain/biography.entity.ts
export interface Biography {
    id: number;
    title: string;
    content: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBiography {
    title: string;
    content: string;
}