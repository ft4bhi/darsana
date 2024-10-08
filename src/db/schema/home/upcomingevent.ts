// src\db\schema\home\upcomingevent.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";

// Rename the export to avoid conflict
export const upcomingEventDb = drizzle(sql);

export const UpcomingEvents_Table = pgTable('upcoming_events_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  date: timestamp('date').notNull(),
  month: text('month').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
});

export type InsertUpcomingEvents = typeof UpcomingEvents_Table.$inferInsert;
export type SelectUpcomingEvents = typeof UpcomingEvents_Table.$inferSelect;
