// src/modules/biography/application/commands/create-biography.command.ts
import { BiographyRepository } from "@/modules/biography/domain/biography.repository";
import { CreateBiography } from "@/modules/biography/domain/biography.entity";

export class CreateBiographyCommand {
    constructor(private readonly repo: BiographyRepository) {}

    execute(data: CreateBiography) {
        return this.repo.create(data);
    }
}
