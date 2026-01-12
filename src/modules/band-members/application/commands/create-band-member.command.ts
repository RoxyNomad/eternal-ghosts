// src/modules/band-members/application/commands/create-band-member.command.ts
export class CreateBandMemberCommand {
    constructor(
        public readonly name: string,
        public readonly role: string,
        public readonly imageUrl: string
    ) {}
}
