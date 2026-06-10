// src/modules/biography/application/get-biography.query.ts
import { BiographyRepository} from "@/modules/biography/domain/biography.repository";

export class GetBiographyQuery {
    constructor(private readonly biographyRepository: BiographyRepository) {}

    execute() {
        return this.biographyRepository.getAllPublished();
    }
}
