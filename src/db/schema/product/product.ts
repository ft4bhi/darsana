import { integer, pgTable, serial, text, decimal, boolean, timestamp } from 'drizzle-orm/pg-core';
import { sql } from '@vercel/postgres';

// Assuming you have defined `product_categories` and `suppliers` tables
import { productCategories } from './productcategory';
import { vendors } from './vendor';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  description: text('description').notNull(),
  categoryId: integer('category_id')
    .references(() => productCategories.id, { onDelete: 'set null' }),
  supplierId: integer('supplier_id')
    .references(() => vendors.id, { onDelete: 'set null' }),
  isActive: boolean('is_active').default(sql`TRUE`),
  isArchived: boolean('is_archived').default(sql`FALSE`),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .onUpdate(sql`CURRENT_TIMESTAMP`),
});

// Export types for insert and select
export type InsertProduct = typeof products.$inferInsert;
export type SelectProduct = typeof products.$inferSelect;
