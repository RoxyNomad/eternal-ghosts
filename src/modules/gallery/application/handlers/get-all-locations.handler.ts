// src/modules/gallery/application/get-all-locations.handler.ts
import { LocationRepository } from "../../domain/location.repository";
import { GetAllLocationsQuery } from "@/modules/gallery/application/queries/get-all-locations.query";

export class GetAllLocationsHandler {
	constructor(private readonly repo: LocationRepository) {}

	async execute(query: GetAllLocationsQuery) {
		void query;

		return this.repo.getAllWithPictureCount();
	}
}