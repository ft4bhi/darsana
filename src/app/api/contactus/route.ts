import { NextResponse } from 'next/server';
import { db, ContactDetail_Table } from '@/db/schema/contactus';
import { testConnection } from '@/db';

export async function POST(request: Request) {
    try {
        console.log('API route hit');
        
        // Test the database connection
        const isConnected = await testConnection();
        console.log('Database connection test result:', isConnected);
        
        if (!isConnected) {
            throw new Error('Database connection failed');
        }

        const { firstname, lastname, email, phone, subject, message, privacypolicy } = await request.json();
        console.log('Received contact data:', { firstname, lastname, email, phone, subject, message, privacypolicy });
        
        if (!firstname || !lastname || !email || !phone || !subject || !message || privacypolicy === undefined) {
            return NextResponse.json({ 
                error: 'All fields are required', 
            }, { status: 400 });
        }
        
        console.log('Attempting to insert data into database');
        const newContact = await db.insert(ContactDetail_Table).values({
            firstname,
            lastname,
            email,
            phone,
            subject,
            message,
            privacypolicy,
            createdAt: new Date(),
            updatedAt: new Date(),
        }).returning();
        console.log('New contact added:', newContact);
        
        return NextResponse.json(newContact[0], { status: 201 });
    } catch (error) {
        console.error('Detailed error in adding contact:', error);
        if (error instanceof Error) {
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        return NextResponse.json({ 
            error: 'Failed to add contact', 
            details: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 });
    }
}