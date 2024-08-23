// src/app/api/DeleteProduct/[id]/route.ts
import { NextResponse } from 'next/server';
import { ProductsDb, products } from '@/db/schema/product/product';
import { eq } from 'drizzle-orm';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const productId = Number(params.id);
        
        // Delete the product with the given ID
        await ProductsDb.delete(products)
            .where(eq(products.id, productId))
            .execute();

        return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting product:', error);
        return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
    }
}
