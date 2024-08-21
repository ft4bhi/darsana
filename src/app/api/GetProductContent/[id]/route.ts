import { NextResponse } from 'next/server';
import { ProductsDb, products } from '@/db/schema/product/products';
import { testConnection } from '@/db';
import { eq } from 'drizzle-orm';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        console.log('API route hit for fetching a single product by ID');

        // Test the database connection (assuming testConnection is defined elsewhere in your project)
        const isConnected = await testConnection();
        console.log('Database connection test result:', isConnected);

        if (!isConnected) {
            throw new Error('Database connection failed');
        }

        // Extract the product ID from the params and convert it to an integer
        const productId = parseInt(params.id, 10);
        if (isNaN(productId)) {
            return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
        }

        // Fetch the product by ID using the Drizzle ORM `eq` method
        const product = await ProductsDb.select()
            .from(products)
            .where(eq(products.id, productId))
            .limit(1) // Assuming the ID is unique, limit the result to one entry
            .execute();

        if (product.length === 0) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        console.log('Fetched product:', product[0]);

        return NextResponse.json(product[0], { status: 200 });
    } catch (error) {
        console.error('Detailed error in fetching the product:', error);
        return NextResponse.json({ 
            error: 'Failed to fetch product', 
            details: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 });
    }
}
