import { pgTable, integer, text, timestamp, index } from 'drizzle-orm/pg-core';

export const newsTable = pgTable(
  'news',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    title: text('title').notNull(),
    content: text('content').notNull(),
    imageUrl: text('image_url'),
    publishedAt: timestamp('published_at', { mode: 'date' }).defaultNow().notNull(),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow().notNull(),
  },
  (table) => [
    index('news_published_at_idx').on(table.publishedAt),
  ]
);

export type SelectNewsDb = typeof newsTable.$inferSelect;