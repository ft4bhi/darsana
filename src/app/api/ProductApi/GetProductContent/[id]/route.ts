import { NextResponse } from 'next/server';
import { ProductsDb, products } from '@/db/schema/product/product';
import { eq } from 'drizzle-orm';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        console.log('API route hit for fetching product details');

        const productId = parseInt(params.id, 10);
        if (isNaN(productId)) {
            return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
        }

        const product = await ProductsDb.select()
            .from(products)
            .where(eq(products.id, productId))
            .limit(1)
            .execute();

        if (product.length === 0) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(product[0], { status: 200 });
    } catch (error) {
        console.error('Error fetching product details:', error);
        return NextResponse.json({ 
            error: 'Failed to fetch product details', 
            details: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 });
    }
}

// Existing PUT method remains unchanged
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    // ... existing code for toggling product visibility
}
