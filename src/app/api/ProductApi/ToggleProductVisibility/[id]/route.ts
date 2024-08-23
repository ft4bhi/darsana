import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { products } from '@/db/schema/product/product';
import { eq } from 'drizzle-orm';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
    }

    // Fetch the current product
    const [product] = await db.select().from(products).where(eq(products.id, id));

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Toggle the visibility
    const updatedVisibility = !product.isVisible;

    // Update the product in the database
    await db.update(products)
      .set({ isVisible: updatedVisibility })
      .where(eq(products.id, id));

    return NextResponse.json({ success: true, isVisible: updatedVisibility });
  } catch (error) {
    console.error('Error toggling product visibility:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}