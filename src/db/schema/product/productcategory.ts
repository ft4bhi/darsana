import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { sql } from '@vercel/postgres';

export const productCategories = pgTable('product_categories', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().unique(),
  description: text('description'),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .onUpdate(sql`CURRENT_TIMESTAMP`),
});

// Export types for insert and select
export type InsertProductCategory = typeof productCategories.$inferInsert;
export type SelectProductCategory = typeof productCategories.$inferSelect;
