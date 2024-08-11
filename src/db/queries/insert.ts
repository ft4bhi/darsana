import { ContactDetail_Table } from '../schema/contactus';
import { db } from '../index';
import { InsertContactDetail } from '../schema/contactus';

// Use the actual table object
export async function createUser(data: InsertContactDetail) {
  await db.insert(ContactDetail_Table).values(data);
}
