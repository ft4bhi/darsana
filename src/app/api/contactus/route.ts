import { NextResponse } from 'next/server';
import { db, ContactTable } from '@/lib/drizzle';

export async function POST(request: Request) {
    try {
        const { firstname, lastname, email, phone, subject, message, privacypolicy } = await request.json();
        console.log('Received contact data:', { firstname, lastname, email, phone, subject, message, privacypolicy });
        
        if (!firstname || !lastname || !email || !phone || !subject || !message || privacypolicy === undefined) {
            return NextResponse.json({ 
                error: 'All fields are required', 
            }, { status: 400 });
        }
        
        const newContact = await db.insert(ContactTable).values({
            firstname,
            lastname,
            email,
            phone,
            subject,
            message,
            privacypolicy,
            createdat: new Date()
        }).returning();
        console.log('New contact added:', newContact);
        
        return NextResponse.json(newContact[0], { status: 201 });
    } catch (error) {
        console.error('Detailed error in adding contact:', error);
        return NextResponse.json({ 
            error: 'Failed to add contact', 
            details: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 });
    }
}

export async function GET() {
    try {
        const contacts = await db.select().from(ContactTable).execute();
        console.log('Contacts fetched:', contacts);
        return NextResponse.json(contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json({ 
            error: 'Failed to fetch contacts', 
            details: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 });
    }
}