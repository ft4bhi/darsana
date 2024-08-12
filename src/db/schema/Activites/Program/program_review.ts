import { sql } from '@vercel/postgres';
import { 
  serial, 
  integer,
  text, 
  timestamp, 
  pgTable
} from 'drizzle-orm/pg-core';
import { programDetails } from './program_detail'; // Assuming you have a program_details table defined

export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  programDetailId: integer('program_detail_id')
    .references(() => programDetails.id, { onDelete: 'cascade' }),
  reviewerName: text('reviewer_name').notNull(),
  reviewerTitle: text('reviewer_title').notNull(),
  reviewPhotoUrl: text('review_photo_url'),
  reviewContent: text('review_content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});