// src/modules/news/application/handlers/create-news.handler.ts

import { NewsRepository } from "../../domain/news.repository";
import { CreateNewsCommand } from "../commands/create-news.command";

export class CreateNewsHandler {
    constructor(private readonly repo: NewsRepository) {}

    async execute(command: CreateNewsCommand) {
        return this.repo.create({
            title: command.title,
            content: command.content,
            imageUrl: command.imageUrl,
        });
    }
}