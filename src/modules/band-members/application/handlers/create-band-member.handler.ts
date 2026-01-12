// application/handlers/create-band-member.handler.ts
import { BandMemberRepository } from "../../domain/band-member.repository";
import { CreateBandMemberCommand } from "../commands/create-band-member.command";

export class CreateBandMemberHandler {
    constructor(private repo: BandMemberRepository) {}

    async execute(command: CreateBandMemberCommand) {
        return this.repo.create({
            name: command.name,
            role: command.role,
            imageUrl: command.imageUrl,
        });
    }
}
