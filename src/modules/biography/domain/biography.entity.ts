// src/modules/biography/domain/biography.entity.ts
export interface Biography {
    id: number;
    title: string;
    content: string;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateBiography {
    title: string;
    content: string;
}

export interface UpdateBiography {
    id: number;
    title: string;
    content: string;
}