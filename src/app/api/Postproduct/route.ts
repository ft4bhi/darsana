import { NextResponse } from 'next/server';
import { products, ProductsDb } from '@/db/schema/product/products';
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

        // Parse the request body
        const {
            title,
            description,
            category,
            typeValuePairs,
            firstName,
            companyName,
            email,
            phoneNumber,
            city,
            state,
            country
        } = await request.json();
        console.log('Received product data:', {
            title,
            description,
            category,
            typeValuePairs,
            firstName,
            companyName,
            email,
            phoneNumber,
            city,
            state,
            country
        });

        // Insert data into the database
        console.log('Attempting to insert data into database');
        const [newProduct] = await ProductsDb.insert(products).values({
            title,
            description,
            category,
            typeValuePairs,
            firstName,
            companyName,
            email,
            phoneNumber,
            city,
            state,
            country
        }).returning();
        console.log('New product added:', newProduct);

        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        console.error('Detailed error in adding product:', error);
        if (error instanceof Error) {
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        return NextResponse.json({ 
            error: 'Failed to add product', 
            details: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 });
    }
}
