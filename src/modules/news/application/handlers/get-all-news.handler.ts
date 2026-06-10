// src/modules/news/application/handlers/get-all-news.handler.ts

import { NewsRepository } from "../../domain/news.repository";

export class GetAllNewsHandler {
    constructor(private readonly repo: NewsRepository) {}

    async execute() {
        return this.repo.getAllPublished();
    }
}