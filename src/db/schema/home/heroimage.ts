import { sql } from '@vercel/postgres';
import { serial, text, timestamp, pgTable } from 'drizzle-orm/pg-core';

export const heroImages = pgTable('hero_images', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  imageUrl: text('image_url').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});