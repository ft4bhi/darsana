import { NextResponse } from 'next/server';
import { ProductsDb, products } from '@/db/schema/product/product';
import { testConnection } from '@/db';
import { eq } from 'drizzle-orm';

export async function GET(req: Request) {
    try {
        console.log('API route hit for fetching visible products');

        // Test the database connection
        const isConnected = await testConnection();
        console.log('Database connection test result:', isConnected);

        if (!isConnected) {
            throw new Error('Database connection failed');
        }

        // Fetch only visible products ordered by ID
        const visibleProducts = await ProductsDb.select()
            .from(products)
            .where(eq(products.isVisible, true))
            .orderBy(products.id)
            .execute();

        console.log('Fetched visible products:', visibleProducts);

        return NextResponse.json(visibleProducts, { status: 200 });
    } catch (error) {
        console.error('Detailed error in fetching visible products:', error);
        return NextResponse.json({ 
            error: 'Failed to fetch visible products', 
            details: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 });
    }
}