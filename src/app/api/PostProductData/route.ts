import { NextResponse } from 'next/server';
import { ProductsDb, products, InsertProduct } from '@/db/schema/product/products';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const productData: InsertProduct = {
      title: body.title,
      description: body.description,
      category: body.category,
      typeValuePairs: body.typeValuePairs, // Accepting as a string
      firstName: body.firstName,
      companyName: body.companyName,
      email: body.email,
      phoneNumber: body.phoneNumber,
      city: body.city,
      state: body.state,
      country: body.country,
    };

    const result = await ProductsDb.insert(products).values(productData).returning();

    return NextResponse.json({ message: 'Product added successfully', product: result[0] }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error adding product:', error);
    if (error instanceof Error) {
      return NextResponse.json({ message: 'Error adding product', error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Error adding product', error: 'An unknown error occurred' }, { status: 500 });
  }
}