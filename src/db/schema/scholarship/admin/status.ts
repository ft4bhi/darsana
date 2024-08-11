import { pgTable, serial, integer, text, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

// Assuming Applicant_Table is imported from another file
import { Applicant_Table } from '../applicant';

// Assuming ContactDetails_Table is imported from another file
import { ContactDetails_Table } from '../contact';

export const ApplicationStatus_Table = pgTable('application_status_table', {
  id: serial('id').primaryKey(),
  applicationNumber: integer('application_number')
    .references(() => Applicant_Table.applicationNumber, { onDelete: 'cascade' })
    .notNull(),
  status: text('status').notNull(),
  remarks: text('remarks'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => {
  return {
    statusCheck: sql`CHECK (${table.status} IN ('SELECTED', 'REJECTED', 'REVERTED', 'PENDING'))`
  }
});

// Zod schema for insert operations
export const insertApplicationStatusSchema = createInsertSchema(ApplicationStatus_Table, {
  status: z.enum(['SELECTED', 'REJECTED', 'REVERTED', 'PENDING']),
  remarks: z.string().optional(),
});

// Zod schema for select operations
export const selectApplicationStatusSchema = createSelectSchema(ApplicationStatus_Table);

// TypeScript types for insert and select operations
export type InsertApplicationStatus = z.infer<typeof insertApplicationStatusSchema>;
export type SelectApplicationStatus = z.infer<typeof selectApplicationStatusSchema>;