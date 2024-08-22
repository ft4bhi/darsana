import { sql } from '@vercel/postgres';
import { serial, text, timestamp, pgTable } from 'drizzle-orm/pg-core';

export const heroImages = pgTable('hero_images', {
  id: serial('id').primaryKey(),
  title: text('title'),
  imageUrl: text('image_url'),
  category: text('category'),
  chapter: text('chapter'),
});
