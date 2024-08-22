import { sql } from '@vercel/postgres';
import {
  serial,
  text,
  date,
  boolean,
  timestamp,
  pgTable,
  pgEnum,
} from 'drizzle-orm/pg-core';

const chapterEnum = pgEnum('chapter', [
  'banglore',
  'palkkad',
  'uae',
  'north america',
  'calicut',
  'oman',
  'saudi',
]);

// Define the schema for the 'conversation_details' table
export const conversationDetails = pgTable('conversation_details', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  date: date('date').notNull(),
  category: text('category'),
  chapter: text('chapter'),
  imageUrl: text('image_url').array(), // Use `.array()` if PgArray is problematic
  isArchived: boolean('is_archived').default(false),
  // Default value for timestamp
});

// Note: `.check` constraints might not be directly supported by drizzle-orm.
// Consider handling constraints directly in your SQL database if needed.
