import { NextResponse } from 'next/server';
import { ProductsDb, products } from '@/db/schema/product/product';
import { testConnection } from '@/db';
import { eq } from 'drizzle-orm';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        console.log('API route hit for toggling product visibility');

        // Test the database connection
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

        // Fetch the current product
        const currentProduct = await ProductsDb.select()
            .from(products)
            .where(eq(products.id, productId))
            .limit(1)
            .execute();

        if (currentProduct.length === 0) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        // Toggle the visibility
        const newVisibility = !currentProduct[0].isVisible;

        // Update the product visibility
        await ProductsDb.update(products)
            .set({ isVisible: newVisibility })
            .where(eq(products.id, productId))
            .execute();

        console.log(`Product visibility toggled. New visibility: ${newVisibility}`);

        return NextResponse.json({ success: true, isVisible: newVisibility }, { status: 200 });
    } catch (error) {
        console.error('Detailed error in toggling product visibility:', error);
        return NextResponse.json({ 
            error: 'Failed to toggle product visibility', 
            details: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 });
    }
}