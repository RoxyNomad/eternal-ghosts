// src/modules/biography/application/queries/get-latest-biography.query.ts
import { BiographyRepository } from "@/modules/biography/domain/biography.repository";

export class GetLatestBiographyQuery {
    constructor(private readonly biographyRepository: BiographyRepository) {}

    execute() {
        return this.biographyRepository.getLatestPublished();
    }
}