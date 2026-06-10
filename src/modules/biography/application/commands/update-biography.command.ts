// src/modules/biography/application/commands/update-biography.command.ts
import { BiographyRepository } from "@/modules/biography/domain/biography.repository";
import { UpdateBiography } from "@/modules/biography/domain/biography.entity";

export class UpdateBiographyCommand {
    constructor(private readonly repo: BiographyRepository) {}

    execute(data: UpdateBiography) {
        return this.repo.update(data);
    }
}