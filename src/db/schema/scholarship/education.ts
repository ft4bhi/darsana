import { pgTable, integer, text, boolean, timestamp, decimal } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

// Assuming Applicant_Table is imported from another file
import { Applicant_Table } from './applicant';

export const EducationDetails_Table = pgTable('education_details_table', {
  applicationId: integer('application_id')
    .references(() => Applicant_Table.id, { onDelete: 'cascade' })
    .primaryKey()
    .notNull(),
  collegeName: text('college_name').notNull(),
  branch: text('branch').notNull(),
  semester: text('semester')
    .notNull(),
  hostelResident: boolean('hostel_resident').notNull(),
  cgpa: decimal('cgpa', { precision: 3, scale: 2 })
    .notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => {
  return {
    semesterCheck: sql`CHECK (${table.semester} IN ('S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'))`,
    cgpaCheck: sql`CHECK (${table.cgpa} >= 0 AND ${table.cgpa} <= 10)`
  }
});

// Zod schema for insert operations
export const insertEducationDetailsSchema = createInsertSchema(EducationDetails_Table, {
  semester: z.enum(['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8']),
  cgpa: z.number().min(0).max(10),
});

// Zod schema for select operations
export const selectEducationDetailsSchema = createSelectSchema(EducationDetails_Table);

// TypeScript types for insert and select operations
export type InsertEducationDetails = z.infer<typeof insertEducationDetailsSchema>;
export type SelectEducationDetails = z.infer<typeof selectEducationDetailsSchema>;