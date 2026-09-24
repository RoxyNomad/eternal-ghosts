import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const adminUsersTable = pgTable('admin_users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
});

export type SelectAdminUserDb = typeof adminUsersTable.$inferSelect;