
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const Applicant_Table = pgTable('Applicant_table', {
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
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
});

export const ContactDetail_Table = pgTable('ContactDetail_table', {
  id: serial('id').primaryKey(),
  applicationNumber: integer('application_number')
    .references(() => Applicant_Table.id, { onDelete: 'cascade' }).notNull(),
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
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
});

export type InsertUser = typeof Applicant_Table.$inferInsert;
export type SelectUser = typeof Applicant_Table.$inferSelect;

export type InsertPost = typeof ContactDetail_Table.$inferInsert;
export type SelectPost = typeof ContactDetail_Table.$inferSelect;