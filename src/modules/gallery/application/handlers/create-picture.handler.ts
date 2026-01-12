// src/modules/gallery/application/handlers/create-picture.handler.ts
import { PictureRepository } from "../../domain/picture.repository";
import { CreatePictureCommand } from "../commands/create-picture.command";

export class CreatePictureHandler {
    constructor(private repo: PictureRepository) {}

    async execute(command: CreatePictureCommand) {
        return this.repo.create({
            date: command.date,
            locationId: command.locationId,
            imageUrl: command.imageUrl,
        });
    }
}
