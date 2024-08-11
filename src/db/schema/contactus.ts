// src\db\schema\contactus.ts
import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";

export const db = drizzle(sql);

export const ContactDetail_Table = pgTable('contact_detail_table', {
  id: serial('id').primaryKey(),
  firstname: text('firstname').notNull(),
  lastname: text('lastname').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  privacypolicy: boolean('privacypolicy').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
});

export type InsertContactDetail = typeof ContactDetail_Table.$inferInsert;
export type SelectContactDetail = typeof ContactDetail_Table.$inferSelect;
