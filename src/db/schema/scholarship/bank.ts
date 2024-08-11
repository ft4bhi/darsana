import { pgTable, serial, integer, text, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

// Assuming Applicant_Table is imported from another file
import { Applicant_Table } from './applicant';

export const BankDetails_Table = pgTable('bank_details_table', {
  id: serial('id').primaryKey(),
  applicationId: integer('application_id')
    .references(() => Applicant_Table.id, { onDelete: 'cascade' })
    .notNull(),
  ifscCode: text('ifsc_code').notNull(),
  bankName: text('bank_name').notNull(),
  branchName: text('branch_name').notNull(),
  accountNumber: text('account_number').notNull(),
  accountHolder: text('account_holder').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Zod schema for insert operations
export const insertBankDetailsSchema = createInsertSchema(BankDetails_Table, {
  ifscCode: z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, { message: "Invalid IFSC code format" }),
  accountNumber: z.string().min(9).max(18).regex(/^\d+$/, { message: "Account number should only contain digits" }),
  accountHolder: z.string().min(1, { message: "Account holder name is required" }),
});

// Zod schema for select operations
export const selectBankDetailsSchema = createSelectSchema(BankDetails_Table);

// TypeScript types for insert and select operations
export type InsertBankDetails = z.infer<typeof insertBankDetailsSchema>;
export type SelectBankDetails = z.infer<typeof selectBankDetailsSchema>;