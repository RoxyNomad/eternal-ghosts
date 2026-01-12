// src/modules/gallery/application/commands/create-picture.command.ts
export class CreatePictureCommand {
    constructor(
        public readonly date: string,
        public readonly locationId: number,
        public readonly imageUrl: string
    ) {}
}
