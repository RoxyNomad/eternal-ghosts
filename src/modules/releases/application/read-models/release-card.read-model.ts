export interface ReleaseCardReadModel {
  id: string;
  title: string;
  type: string;
  formattedDate: string;
  coverUrl: string;
  description: string | null;
  audioUrl?: string;
}
