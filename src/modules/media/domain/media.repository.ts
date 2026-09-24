import { CreateMediaInput, MediaEntity } from "./media.entity";

export interface MediaRepository {
  getAll(): Promise<MediaEntity[]>;
  create(input: CreateMediaInput): Promise<MediaEntity>;
  delete(id: number): Promise<void>;
}