// src/infrastricture/services/PictureService.ts
import { LivePictureRepository } from "@/domain/repositories/LivePictureRepository";
import { LivePicture } from "@/domain/entities/PictureEntity";

export class PictureService {
	constructor(private repo: LivePictureRepository) {}

	async getAllLivePictures(): Promise<LivePicture[]> {
		return this.repo.getAll()
	}

	async createLivePicture(picture: Omit<LivePicture, "id">): Promise<LivePicture> {
		return this.repo.create(picture);
	}

	async deleteLivePicture(id: number): Promise<void> {
		return this.repo.delete(id);
	}
}