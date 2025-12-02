// src/application/queries/GetPicturesByLocationQuery.ts
import { LivePictureRepository } from "@/domain/repositories/LivePictureRepository";

export class GetPicturesByLocationQuery {
	constructor(private repo: LivePictureRepository) {}

	async execute(location: string) {
		return this.repo.getByLocation(location);
	}
}
