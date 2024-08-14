import { pgTable, serial, integer, text, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

// Assuming Applicant_Table is imported from another file
import { Applicant_Table } from './applicant';

export const Documentation_Table = pgTable('documentation_table', {
  id: serial('id').primaryKey(),
  applicationId: integer('application_id')
    .references(() => Applicant_Table.id, { onDelete: 'cascade' })
    .notNull(),
  photo: text('photo').notNull(),
  cheque: text('cheque').notNull(),
  aadharCard: text('aadhar_card').notNull(),
  collegeID: text('college_id').notNull(),
  incomeCertificate: text('income_certificate').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Zod schema for insert operations
export const insertDocumentationSchema = createInsertSchema(Documentation_Table, {
  photo: z.string().min(1, "Photo is required"),
  cheque: z.string().min(1, "Cheque is required"),
  aadharCard: z.string().min(1, "Aadhar Card is required"),
  collegeID: z.string().min(1, "College ID is required"),
  incomeCertificate: z.string().min(1, "Income Certificate is required"),
});

// Zod schema for select operations
export const selectDocumentationSchema = createSelectSchema(Documentation_Table);

// TypeScript types for insert and select operations
export type InsertDocumentation = z.infer<typeof insertDocumentationSchema>;
export type SelectDocumentation = z.infer<typeof selectDocumentationSchema>;