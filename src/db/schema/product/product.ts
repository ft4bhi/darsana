// src\db\schema\product\product.ts

import { pgTable, serial, varchar, text, jsonb, integer } from 'drizzle-orm/pg-core';
import { vendors } from './vendor';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  rfoImages: jsonb('rfo_images'),
  category: varchar('category', { length: 100 }).notNull(),
  typeValuePairs: jsonb('type_value_pairs').notNull(),
  vendorId: integer('vendor_id').references(() => vendors.id).notNull(),
});

// Export types for insert and select
export type InsertProduct = typeof products.$inferInsert;
export type SelectProduct = typeof products.$inferSelect;
