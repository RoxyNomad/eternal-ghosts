// src/modules/news/application/commands/create-news.command.ts

export class CreateNewsCommand {
    constructor(
        public readonly title: string,
        public readonly content: string,
        public readonly imageUrl: string
    ) {}
}