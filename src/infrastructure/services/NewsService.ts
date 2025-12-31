// src/infrastructure/services/NewsService.ts
import { CreateNews } from "@/domain/entities/NewsEntity";
import { NewsRepository } from "@/domain/repositories/NewsRepository";

export class NewsService {
    constructor(private readonly repo: NewsRepository) {}

    createNews(data: CreateNews) {
        return this.repo.create(data);
    }

    getPublishedNews() {
        return this.repo.getAllPublished();
    }
}
