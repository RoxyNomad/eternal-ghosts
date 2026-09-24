import { pgTable, integer, text, timestamp, index } from 'drizzle-orm/pg-core';

export const biographyTable = pgTable(
  'biography',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    title: text('title').notNull(),
    content: text('content').notNull(),
    publishedAt: timestamp('published_at', { mode: 'date' }).defaultNow().notNull(),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow().notNull(),
  },
  (table) => [
    index('biography_published_at_idx').on(table.publishedAt),
  ]
);

export type SelectBiographyDb = typeof biographyTable.$inferSelect;
export type InsertBiographyDb = typeof biographyTable.$inferInsert;