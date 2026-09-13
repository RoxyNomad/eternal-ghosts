// src/modules/releases/application/read-models/release-card.read-model.ts
export interface ReleaseCardReadModel {
  id: string;
  title: string;
  type: string;
  formattedDate: string;
  coverUrl: string;
  description: string | null;
}
