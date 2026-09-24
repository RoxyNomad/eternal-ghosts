export interface Release {
  id: string;
  title: string;
  type: 'Album' | 'EP' | 'Single';
  releaseDate: Date;
  coverImageUrl: string;
  coverImagePublicId: string;
  audioUrl?: string;
  audioPublicId?: string;
  description?: string;
  createdAt: Date;
}