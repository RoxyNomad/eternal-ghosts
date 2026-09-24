import { MediaRepository } from "../../domain/media.repository";
import { MediaEntity, extractYouTubeId } from "../../domain/media.entity";
import { CreateMediaCommand } from "../commands/create-media.command";

export class CreateMediaHandler {
  constructor(private readonly repository: MediaRepository) {}

  async execute(command: CreateMediaCommand): Promise<MediaEntity> {
    const videoId = extractYouTubeId(command.youtubeUrl);
    if (!videoId) {
      throw new Error("Invalid YouTube URL");
    }

    return await this.repository.create({
      title: command.title,
      youtubeUrl: command.youtubeUrl,
      description: command.description,
    });
  }
}