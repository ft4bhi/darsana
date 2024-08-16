import { pgTable, serial, varchar, text, jsonb, integer,timestamp } from 'drizzle-orm/pg-core';
import { vendors } from './vendor';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull(),
  description: text('description').notNull(),
  Images: jsonb('rfo_images').notNull(),
  category: varchar('category').notNull(),
  typeValuePairs: jsonb('type_value_pairs').notNull(),
  vendorId: integer('vendor_id').references(() => vendors.id).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(), 
});

