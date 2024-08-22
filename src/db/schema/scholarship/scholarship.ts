import {
  pgTable,
  serial,
  integer,
  text,
  timestamp,
  boolean,
  decimal,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

// Consolidated scholarship table
export const Scholarship_Table = pgTable(
  'scholarship',
  {
    id: serial('id').primaryKey(),
    applicationNumber: integer('application_number'),
    name: text('name'),
    gender: text('gender'),
    category: text('category'),
    fatherName: text('father_name'),
    motherName: text('mother_name'),
    income: integer('income'),
    phoneNumber: text('phone_number'),
    dateOfBirth: timestamp('date_of_birth'),
    nationality: text('nationality'),
    adharNumber: text('adhar_number'),
    fatherOccupation: text('father_occupation'),
    motherOccupation: text('mother_occupation'),
    houseNumber: text('house_number'),
    postOffice: text('post_office'),
    pinCode: text('pin_code'),
    bankIfscCode: text('bank_ifsc_code'),
    bankName: text('bank_name'),
    bankBranch: text('bank_branch'),
    bankAccountNumber: text('bank_account_number'),
    bankAccountHolder: text('bank_account_holder'),
    photo: text('photo'),
    cheque: text('cheque'),
    aadharCard: text('aadhar_card'),
    collegeID: text('college_id'),
    incomeCertificate: text('income_certificate'),
    collegeName: text('college_name'),
    branch: text('branch'),
    semester: text('semester'),
    hostelResident: boolean('hostel_resident'),
    cgpa: decimal('cgpa', { precision: 3, scale: 2 }),
    status: text('status'),
    remarks: text('remarks'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  (table) => {
    return {
      semesterCheck: sql`CHECK (${table.semester} IN ('S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'))`,
      cgpaCheck: sql`CHECK (${table.cgpa} >= 0 AND ${table.cgpa} <= 10)`,
      statusCheck: sql`CHECK (${table.status} IN ('SELECTED', 'REJECTED', 'REVERTED', 'PENDING'))`,
    };
  }
);
