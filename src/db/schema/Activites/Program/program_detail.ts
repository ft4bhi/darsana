import { sql } from '@vercel/postgres';
import { 
  serial, 
  integer,
  text, 
  date, 
  timestamp, 
  pgTable
} from 'drizzle-orm/pg-core';
import { programs } from './program'; // Assuming you have a programs table defined

export const programDetails = pgTable('program_details', {
  id: serial('id').primaryKey(),
  programId: integer('program_id').references(() => programs.id, { onDelete: 'cascade' }),
  heading: text('heading').notNull(),
  fullName: text('full_name').notNull(),
  date: date('date').notNull(),
  imageUrl: text('image_url'),
  description: text('description').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});