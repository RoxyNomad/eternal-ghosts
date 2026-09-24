import { Biography } from '../../domain/biography.entity';
import { SelectBiographyDb } from '../db/biography.schema';

export function toBiography(raw: SelectBiographyDb): Biography {
  return {
    id: raw.id,
    title: raw.title,
    content: raw.content,
    publishedAt: raw.publishedAt,
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
  };
}