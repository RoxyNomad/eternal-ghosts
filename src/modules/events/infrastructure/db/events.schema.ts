import { pgTable, serial, integer, text, timestamp, date } from 'drizzle-orm/pg-core';

export const eventsTable = pgTable('events', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  date: timestamp('date', { mode: 'date' }).notNull(),
  location: text('location'),
});

export const locationsTable = pgTable('locations', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().unique(),
  imageUrl: text('image_url'),
});

export const livePicturesTable = pgTable('live_pictures', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  imageUrl: text('image_url'),
  locationId: integer('location_id').references(() => locationsTable.id, { onDelete: 'cascade' }),
  date: date('date', { mode: 'string' }),
});

export type SelectEventDb = typeof eventsTable.$inferSelect;
export type InsertEventDb = typeof eventsTable.$inferInsert;
export type SelectLocationDb = typeof locationsTable.$inferSelect;
export type SelectLivePictureDb = typeof livePicturesTable.$inferSelect;