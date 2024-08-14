import { pgTable, serial, text, date, time, timestamp } from 'drizzle-orm/pg-core';

// Define the schema for the 'programs' table
export const programs = pgTable('programs', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  date: date('date').notNull(),
  venue: text('venue').notNull(),
  startTime: time('start_time').notNull(),
  endTime: time('end_time').notNull(),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow(), // Use defaultNow() for CURRENT_TIMESTAMP
  updatedAt: timestamp('updated_at').defaultNow(), // Use defaultNow() for CURRENT_TIMESTAMP
});
