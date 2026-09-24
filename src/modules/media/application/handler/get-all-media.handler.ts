import { MediaRepository } from "../../domain/media.repository";
import { MediaEntity } from "../../domain/media.entity";

export class GetAllMediaHandler {
  constructor(private readonly repository: MediaRepository) {}

  async execute(): Promise<MediaEntity[]> {
    return await this.repository.getAll();
  }
}