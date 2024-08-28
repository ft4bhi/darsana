// src\db\schema\product\products.ts
import { pgTable, serial, varchar, text, jsonb, boolean  } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";

export const ProductsDb = drizzle(sql);
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }),
  description: text('description'), 
  category: varchar('category', { length: 100 }),
  typeValuePairs: jsonb('type_value_pairs'),
  firstName: varchar('first_name', { length: 100 }),
  companyName: varchar('company_name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  phoneNumber: varchar('phone_number', { length: 20 }),
  city: varchar('city', { length: 100 }),
  state: varchar('state', { length: 100 }),
  country: varchar('country', { length: 100 }),
  isVisible: boolean('is_visible').default(true),
});

// Export types for insert and select
export type InsertProduct = typeof products.$inferInsert;
export type SelectProduct = typeof products.$inferSelect;
