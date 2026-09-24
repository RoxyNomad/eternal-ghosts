import { News } from "../../domain/news.entity";
import { SelectNewsDb } from "../db/news.schema";

export class NewsMapper {
  static toDomain(raw: SelectNewsDb): News {
    return {
      id: raw.id,
      title: raw.title,
      content: raw.content,
      imageUrl: raw.imageUrl ?? null,
      publishedAt: raw.publishedAt,
    };
  }

  static toDomainList(rows: SelectNewsDb[]): News[] {
    return rows.map(NewsMapper.toDomain);
  }
}