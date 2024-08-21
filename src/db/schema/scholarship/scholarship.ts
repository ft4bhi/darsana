import { pgTable, serial, integer, text, timestamp, boolean, decimal } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

// Consolidated scholarship table
export const Scholarship_Table = pgTable('scholarship', {
  id: serial('id').primaryKey(),
  applicationNumber: integer('application_number').notNull(),
  name: text('name').notNull(),
  gender: text('gender').notNull(),
  category: text('category').notNull(),
  fatherName: text('father_name').notNull(),
  motherName: text('mother_name').notNull(),
  income: integer('income').notNull(),
  phoneNumber: text('phone_number').notNull(),
  dateOfBirth: timestamp('date_of_birth').notNull(),
  nationality: text('nationality').notNull(),
  adharNumber: text('adhar_number').notNull(),
  fatherOccupation: text('father_occupation').notNull(),
  motherOccupation: text('mother_occupation').notNull(),
  houseNumber: text('house_number').notNull(),
  postOffice: text('post_office').notNull(),
  pinCode: text('pin_code').notNull(),
  bankIfscCode: text('bank_ifsc_code').notNull(),
  bankName: text('bank_name').notNull(),
  bankBranch: text('bank_branch').notNull(),
  bankAccountNumber: text('bank_account_number').notNull(),
  bankAccountHolder: text('bank_account_holder').notNull(),
  photo: text('photo').notNull(),
  cheque: text('cheque').notNull(),
  aadharCard: text('aadhar_card').notNull(),
  collegeID: text('college_id').notNull(),
  incomeCertificate: text('income_certificate').notNull(),
  collegeName: text('college_name').notNull(),
  branch: text('branch').notNull(),
  semester: text('semester').notNull(),
  hostelResident: boolean('hostel_resident').notNull(),
  cgpa: decimal('cgpa', { precision: 3, scale: 2 }).notNull(),
  status: text('status').notNull(),
  remarks: text('remarks'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => {
  return {
    semesterCheck: sql`CHECK (${table.semester} IN ('S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'))`,
    cgpaCheck: sql`CHECK (${table.cgpa} >= 0 AND ${table.cgpa} <= 10)`,
    statusCheck: sql`CHECK (${table.status} IN ('SELECTED', 'REJECTED', 'REVERTED', 'PENDING'))`
  }
});