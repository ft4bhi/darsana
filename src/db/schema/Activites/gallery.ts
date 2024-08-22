import { sql } from '@vercel/postgres';
import {
  serial,
  text,
  date,
  boolean,
  pgTable,
  pgEnum,
} from 'drizzle-orm/pg-core';

// Define an enum for the chapter field
const chapterEnum = pgEnum('chapter', [
  'banglore',
  'palkkad',
  'uae',
  'north america',
  'calicut',
  'oman',
  'saudi',
]);

export const gallery = pgTable('gallery', {
  id: serial('id').primaryKey(),
  name: text('name'),
  Date: date('upload_date'),
  category: text('category'),
  chapter: chapterEnum('chapter'),
  photoUrl: text('photo_url'),
});
