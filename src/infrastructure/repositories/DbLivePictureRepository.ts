// src/infrastructure/repositories/DbLivePictureRepository.ts
import { LivePictureRepository } from "@/domain/repositories/LivePictureRepository";
import { LivePicture } from "@/domain/entities/PictureEntity";
import { query } from "@/utils/db";

export class DbLivePictureRepository implements LivePictureRepository {
	async getAll(): Promise<LivePicture[]> {
		const res = await query(`SELECT * FROM live_pictures ORDER BY id ASC`);
		return res.rows.map((r: any) => ({
			id: r.id,
			location: r.location,
			date: r.date,
			imageUrl: r.image_url,
		}));
	}

	async create(picture: Omit<LivePicture, "id">): Promise<LivePicture> {
		const res = await query(
			`INSERT INTO live_pictures (location, date, image_url) VALUES ($1, $2, $3) RETURNING *`,
			[picture.location, picture.date, picture.imageUrl]
		);
		return res.rows[0];
	}

	async delete(id: number): Promise<void> {
		await query(`DELETE FROM live_pictures WHERE id = $1`, [id]);
	}
}