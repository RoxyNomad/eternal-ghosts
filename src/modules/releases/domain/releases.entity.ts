export interface Release {
  id: string;
  title: string;
  type: 'Album' | 'EP' | 'Single';
  releaseDate: Date;
  coverImageUrl: string;
  coverImagePublicId: string;
  description?: string;
  createdAt: Date;
}
