export interface Release {
  id: string;
  title: string;
  type: 'Album' | 'EP' | 'Single';
  releaseDate: Date;
  coverImageUrl: string;
  coverImagePublicId: string;
  audioUrl?: string;          // Direkt-Link zur Werbefreien Audio-Datei
  audioPublicId?: string;
  description?: string;
  createdAt: Date;
}