// src/application/queries/GetAllNewsQuery.ts
import { NewsRepository} from "@/domain/repositories/NewsRepository";
import { News} from "@/domain/entities/NewsEntity";

export class GetAllNewsQuery {
    constructor(private readonly newsRepository: NewsRepository) {}

    async execute(): Promise<News[]> {
        return this.repository.getAllPublished();
    }
}