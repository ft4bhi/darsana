import { sql } from '@vercel/postgres';
import { 
  serial, 
  text, 
  date, 
  boolean, 
  timestamp, 
  pgTable,
  pgEnum
} from 'drizzle-orm/pg-core';

// Define an enum for the chapter field
const chapterEnum = pgEnum('chapter', ['banglore', 'palkkad', 'uae', 'north america','calicut','oman','saudi']);

export const gallery = pgTable('gallery', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  uploadDate: date('upload_date').notNull(),
  category: text('category'),
  chapter: chapterEnum('chapter'),
  photoUrl: text('photo_url').notNull(),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});