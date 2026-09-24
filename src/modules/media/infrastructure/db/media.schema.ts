import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const mediaTable = pgTable("media", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  youtubeUrl: text("youtube_url").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

export type SelectMediaDb = typeof mediaTable.$inferSelect;
export type InsertMediaDb = typeof mediaTable.$inferInsert;