import { NextResponse } from 'next/server';
import { upcomingEventDb, UpcomingEvents_Table } from '@/db/schema/home/upcomingevent';
import { testConnection } from '@/db';

export async function GET() {
    try {
        console.log('API route hit for fetching events');

        // Test the database connection
        const isConnected = await testConnection();
        console.log('Database connection test result:', isConnected);

        if (!isConnected) {
            throw new Error('Database connection failed');
        }

        // Fetch events from the database and order by date ascending
        const events = await upcomingEventDb
            .select()
            .from(UpcomingEvents_Table)
            .orderBy(UpcomingEvents_Table.date); // Removed the .asc() method
        console.log('Fetched events:', events);

        return NextResponse.json(events, { status: 200 });
    } catch (error) {
        console.error('Detailed error in fetching events:', error);
        if (error instanceof Error) {
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        return NextResponse.json({ 
            error: 'Failed to fetch events', 
            details: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 });
    }
}
