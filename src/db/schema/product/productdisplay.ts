import { pgTable, serial, integer, text, boolean, timestamp } from 'drizzle-orm/pg-core';
import { sql } from '@vercel/postgres';
import { products } from './product'; // Assuming you have a `products` table defined

export const productImages = pgTable('product_images', {
  id: serial('id').primaryKey(),
  productId: integer('product_id')
    .references(() => products.id, { onDelete: 'cascade' })
    .notNull(),
  imageUrl: text('image_url').notNull(),
  isMain: boolean('is_main').default(sql`FALSE`),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// Export types for insert and select
export type InsertProductImage = typeof productImages.$inferInsert;
export type SelectProductImage = typeof productImages.$inferSelect;
