// src/modules/band-members/application/handlers/delete-band-member.handler.ts
import { BandMemberRepository } from "../../domain/band-member.repository";
import { DeleteBandMemberCommand } from "../commands/delete-band-member.command";

export class DeleteBandMemberHandler {
    constructor(private repo: BandMemberRepository) {}

    async execute(command: DeleteBandMemberCommand): Promise<void> {
        await this.repo.delete(command.id);
    }
}
