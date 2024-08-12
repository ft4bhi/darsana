import { pgTable, serial, integer, text } from 'drizzle-orm/pg-core';
import { products } from './product'; // Assuming you have a `products` table defined

export const productDetails = pgTable('product_details', {
  id: serial('id').primaryKey(),
  productId: integer('product_id')
    .references(() => products.id, { onDelete: 'cascade' }),
  type: text('type'),
  material: text('material'),
  design: text('design'),
  customization: text('customization'),
  protection: text('protection'),
  warranty: text('warranty'),
  model: text('model'),
  style: text('style'),
  certificate: text('certificate'),
  size: text('size'),
});

// Export types for insert and select
export type InsertProductDetail = typeof productDetails.$inferInsert;
export type SelectProductDetail = typeof productDetails.$inferSelect;
