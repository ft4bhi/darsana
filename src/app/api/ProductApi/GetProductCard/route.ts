//api/GetProductCard

import { NextResponse } from 'next/server';
import { ProductsDb, products } from '@/db/schema/product/product';
import { testConnection } from '@/db';

export async function GET(req: Request) {
    try {
        console.log('API route hit for fetching all products');

        // Test the database connection
        const isConnected = await testConnection();
        console.log('Database connection test result:', isConnected);

        if (!isConnected) {
            throw new Error('Database connection failed');
        }

        // Fetch all products ordered by ID
        const allProducts = await ProductsDb.select()
            .from(products)
            .orderBy(products.id) // Correctly order by ID in ascending order
            .execute();

        console.log('Fetched products:', allProducts);

        return NextResponse.json(allProducts, { status: 200 });
    } catch (error) {
        console.error('Detailed error in fetching products:', error);
        return NextResponse.json({ 
            error: 'Failed to fetch products', 
            details: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 });
    }
}
