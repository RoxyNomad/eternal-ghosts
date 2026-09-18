export interface CreateReleaseCommand {
  title: string;
  type: 'Album' | 'EP' | 'Single';
  releaseDate: Date;
  coverImageUrl: string;
  coverImagePublicId: string;
  audioUrl?: string;
  audioPublicId?: string;
  description?: string;
}