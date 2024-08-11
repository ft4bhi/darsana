import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { sql } from '@vercel/postgres';

export const vendors = pgTable('vendors', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  address: text('address').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  location: text('location'),  // Optional location details
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .onUpdate(sql`CURRENT_TIMESTAMP`),
});

// Export types for insert and select
export type InsertVendor = typeof vendors.$inferInsert;
export type SelectVendor = typeof vendors.$inferSelect;
