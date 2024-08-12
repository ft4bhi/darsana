import { sql } from '@vercel/postgres';
import { 
  serial, 
  text, 
  date, 
  boolean, 
  timestamp, 
  pgTable 
} from 'drizzle-orm/pg-core';

// Define the schema for the 'conversation_details' table
export const conversationDetails = pgTable('conversation_details', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  date: date('date').notNull(),
  category: text('category'),
  chapter: text('chapter')
    .default(sql`'banglore'`), // Default value
  imageUrl: text('image_url').array(), // Use `.array()` if PgArray is problematic
  isActive: boolean('is_active').default(true),
  isArchived: boolean('is_archived').default(false),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`), // Default value for timestamp
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`), // Default value for timestamp
});

// Note: `.check` constraints might not be directly supported by drizzle-orm.
// Consider handling constraints directly in your SQL database if needed.
