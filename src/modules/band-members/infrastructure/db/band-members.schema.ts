import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const bandMembersTable = pgTable('band_members', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  role: text('role').notNull(),
  imageUrl: text('image_url'),
});

export type SelectBandMemberDb = typeof bandMembersTable.$inferSelect;
export type InsertBandMemberDb = typeof bandMembersTable.$inferInsert;