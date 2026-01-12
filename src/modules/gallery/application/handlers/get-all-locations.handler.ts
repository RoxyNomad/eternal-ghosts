// src/modules/gallery/application/get-all-locations.handler.ts
import { LocationRepository } from "../../domain/location.repository";
import { GetAllLocationsQuery } from "../queries/get-all-locations.query";

export class GetAllLocationsHandler {
	constructor(private repo: LocationRepository) {}

	async execute(_: GetAllLocationsQuery) {
		return this.repo.getAll();
	}
}
