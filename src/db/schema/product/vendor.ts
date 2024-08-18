import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const vendors = pgTable('vendors', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  companyName: varchar('company_name', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull(),
  phoneNumber: varchar('phone_number', { length: 20 }),
  city: varchar('city', { length: 100 }),
  state: varchar('state', { length: 100 }),
  country: varchar('country', { length: 100 }),
});

// Export types for insert and select
export type InsertVendor = typeof vendors.$inferInsert;
export type SelectVendor = typeof vendors.$inferSelect;
