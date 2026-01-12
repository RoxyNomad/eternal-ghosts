import { NewsRepository } from "@/modules/news/domain/news.repository";
import { CreateNews } from "@/modules/news/domain/news.entity";

export class CreateNewsCommand {
    constructor(private readonly repo: NewsRepository) {}

    execute(data: CreateNews) {
        return this.repo.create(data);
    }
}
