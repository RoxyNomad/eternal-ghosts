import { Release } from '../../domain/releases.entity';

export class ReleaseMapper {
  static toDomain(raw: any): Release {
    return {
      id: raw.id,
      title: raw.title,
      type: raw.release_type,
      releaseDate: new Date(raw.release_date),
      coverImageUrl: raw.cover_image_url,
      coverImagePublicId: raw.cover_image_public_id,
      audioUrl: raw.audio_url || undefined,
      audioPublicId: raw.audio_public_id || undefined,
      description: raw.description || undefined,
      createdAt: new Date(raw.created_at),
    };
  }
}