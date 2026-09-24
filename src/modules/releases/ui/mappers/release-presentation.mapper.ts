import { Release } from "../../domain/releases.entity";
import { ReleaseCardReadModel } from "../../application/read-models/release-card.read-model"; // Passe den Pfad zu deinem Typ/Interface an

export class ReleasePresentationMapper {
  static toCardViewModel(release: Release): ReleaseCardReadModel {
    return {
      id: release.id,
      title: release.title,
      type: release.type,
      description: release.description ?? null,
      audioUrl: release.audioUrl,
      coverUrl: release.coverImageUrl,
      formattedDate: new Date(release.releaseDate).toLocaleDateString("de-CH", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    };
  }

  static toCardViewModelList(releases: Release[]): ReleaseCardReadModel[] {
    return releases.map(this.toCardViewModel);
  }
}