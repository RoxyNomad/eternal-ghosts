// src/modules/gallery/application/getPicturesByLocation.ts
import { PictureRepository } from "../domain/PictureRepository";

export const getPicturesByLocation =
	(repo: PictureRepository) =>
		async (location: string) => {
			return repo.getByLocation(location);
		};
