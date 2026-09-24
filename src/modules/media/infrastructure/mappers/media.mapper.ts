import { MediaEntity } from "../../domain/media.entity";
import { SelectMediaDb } from "../db/media.schema";

export class MediaMapper {
  static toDomain(raw: SelectMediaDb): MediaEntity {
    return {
      id: raw.id,
      title: raw.title,
      youtubeUrl: raw.youtubeUrl,
      description: raw.description ?? undefined,
      createdAt: raw.createdAt,
    };
  }

  static toDomainList(rows: SelectMediaDb[]): MediaEntity[] {
    return rows.map(MediaMapper.toDomain);
  }
}