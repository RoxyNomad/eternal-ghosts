// src/domain/repositories/LivePictureRepository.ts
import { LivePicture } from '../entities/PictureEntity'

export interface LivePictureRepository {
	getAll(): Promise<LivePicture[]>;
	create(picture: Omit<LivePicture, 'id'>): Promise<LivePicture>;
	delete(id: number): Promise<void>;
}