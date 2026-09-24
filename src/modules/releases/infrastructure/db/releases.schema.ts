import { pgTable, uuid, varchar, text, date, timestamp } from 'drizzle-orm/pg-core';

export const releasesTable = pgTable('releases', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  releaseType: varchar('release_type', { length: 50 }).notNull(),
  releaseDate: date('release_date', { mode: 'string' }).notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
  coverImagePublicId: text('cover_image_public_id').notNull(),
  description: text('description'),
  audioUrl: text('audio_url'),
  audioPublicId: text('audio_public_id'),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'date' }).defaultNow().notNull(),
});