// application/handlers/delete-picture.handler.ts
import { PictureRepository } from "../../domain/picture.repository";
import { DeletePictureCommand } from "../commands/delete-picture.command";

export class DeletePictureHandler {
    constructor(private repo: PictureRepository) {}

    async execute(command: DeletePictureCommand): Promise<void> {
        await this.repo.delete(command.id);
    }
}
