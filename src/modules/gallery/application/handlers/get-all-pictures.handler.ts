// application/handlers/get-all-pictures.handler.ts
import { PictureRepository } from "../../domain/picture.repository";
import { PictureEntity } from "../../domain/picture.entity";

export class GetAllPicturesHandler {
    constructor(private repo: PictureRepository) {}

    async execute(): Promise<PictureEntity[]> {
        return this.repo.getAll();
    }
}
