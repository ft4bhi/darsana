// src\db\schema\product\Image.ts
import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const files = pgTable('files', {
  id: uuid('id').primaryKey().defaultRandom(),
  fileName: text('file_name').notNull(),
  fileType: text('file_type').notNull(),
  fileSize: serial('file_size').notNull(),
  fileURL: text('file_url').notNull(),
  uploadDate: timestamp('upload_date').defaultNow().notNull(),
});