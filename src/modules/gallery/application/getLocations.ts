// src/application/queries/getLocations.ts
import { LivePictureRepository } from "@/domain/repositories/LivePictureRepository";

export class GetLocations {
	constructor(private repo: LivePictureRepository) {}

	async execute() {
		return this.repo.getLocations();
	}
}
