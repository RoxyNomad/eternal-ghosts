// src/modules/releases/application/handlers/get-releases.handler.ts
import { ReleasesRepository } from "../../domain/releases.repository";
import { ReleaseCardReadModel } from "../read-models/release-card.read-model";

export class GetReleasesHandler {
  constructor(private readonly releasesRepository: ReleasesRepository) {}

  async execute(): Promise<ReleaseCardReadModel[]> {
    const releases = await this.releasesRepository.findAll();
    
    return releases.map((release) => ({
      id: release.id,
      title: release.title,
      type: release.type,
      formattedDate: release.releaseDate.toLocaleDateString("de-CH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      coverUrl: release.coverImageUrl,
      description: release.description ?? null,
    }));
  }
}
