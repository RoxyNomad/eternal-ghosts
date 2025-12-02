// src/application/queries/GetLocationsQuery.ts
import { LivePictureRepository } from "@/domain/repositories/LivePictureRepository";

export class GetLocationsQuery {
	constructor(private repo: LivePictureRepository) {}

	async execute() {
		return this.repo.getLocations();
	}
}
