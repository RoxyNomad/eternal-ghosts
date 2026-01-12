// src/application/queries/get-all-news.query.ts
import { NewsRepository} from "@/modules/news/domain/news.repository";

export class GetAllNewsQuery {
    constructor(private readonly newsRepository: NewsRepository) {}

    execute() {
        return this.newsRepository.getAllPublished();
    }
}
