import { sql } from '@vercel/postgres';
import { serial, text, date, timestamp, pgTable } from 'drizzle-orm/pg-core';

export const upcomingEvents = pgTable('upcoming_events', {
  id: serial('id').primaryKey(),
  eventName: text('event_name').notNull(),
  eventDate: date('event_date').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});