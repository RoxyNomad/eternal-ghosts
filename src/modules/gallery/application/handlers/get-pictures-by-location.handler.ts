// src/modules/gallery/application/get-pictures-by-location.handler.ts
import { PictureRepository } from "../../domain/picture.repository";
import { GetPicturesByLocationQuery } from "../queries/get-pictures-by-location.query";

export class GetPicturesByLocationHandler {
	constructor(private readonly repo: PictureRepository) {}

	async execute(query: GetPicturesByLocationQuery) {
		return this.repo.getByLocationId(query.locationId);
	}
}
