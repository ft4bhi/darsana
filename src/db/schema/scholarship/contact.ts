import { pgTable, serial, integer, text, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

// Assuming Applicant_Table is imported from another file
import { Applicant_Table } from './applicant';

export const ContactDetails_Table = pgTable('contact_details_table', {
  id: serial('id').primaryKey(),
  applicationNumber: integer('application_number')
    .references(() => Applicant_Table.applicationNumber, { onDelete: 'cascade' })
    .notNull(),
  house: text('house').notNull(),
  postOffice: text('post_office').notNull(),
  pinCode: text('pin_code').notNull(),
  district: text('district').notNull(),
  studentEmail: text('student_email').notNull(),
  state: text('state').notNull(),
  country: text('country').notNull(),
  city: text('city').notNull(),
  phoneNumber: text('phone_number').notNull(),
  alternativeNumber: text('alternative_number').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => {
  return {
    phoneNumberCheck: sql`CHECK (${table.phoneNumber} ~ '^\\d{10}$')`,
    alternativeNumberCheck: sql`CHECK (${table.alternativeNumber} ~ '^\\d{10}$')`
  }
});

// Zod schema for insert operations
export const insertContactDetailsSchema = createInsertSchema(ContactDetails_Table, {
  phoneNumber: z.string().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }),
  alternativeNumber: z.string().regex(/^\d{10}$/, { message: "Alternative number must be exactly 10 digits" }),
  studentEmail: z.string().email({ message: "Invalid email address" }),
  pinCode: z.string().regex(/^\d{6}$/, { message: "Pin code must be exactly 6 digits" }),
});

// Zod schema for select operations
export const selectContactDetailsSchema = createSelectSchema(ContactDetails_Table);

// TypeScript types for insert and select operations
export type InsertContactDetails = z.infer<typeof insertContactDetailsSchema>;
export type SelectContactDetails = z.infer<typeof selectContactDetailsSchema>;