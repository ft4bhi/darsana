// src/app/api/UpdateProduct/route.ts
import { NextResponse } from 'next/server';
import { ProductsDb, products } from '@/db/schema/product/products';
import { eq } from 'drizzle-orm';

export async function PUT(request: Request) {
    console.log('Request method: PUT'); // Debugging: Log the request method

    try {
        const body = await request.json();
        console.log('Request body:', body);     // Debugging: Log the request body

        const { id, title, description, category, typeValuePairs, firstName, companyName, email, phoneNumber, city, state, country } = body;

        const updatedProduct = await ProductsDb
            .update(products)
            .set({
                title,
                description,
                category,
                typeValuePairs, // This will now be a string
                firstName,
                companyName,
                email,
                phoneNumber,
                city,
                state,
                country,
            })
            .where(eq(products.id, id))
            .returning();

        console.log('Updated product:', updatedProduct); // Debugging: Log the updated product

        return NextResponse.json(updatedProduct, { status: 200 });
    } catch (error) {
        console.error('Update failed:', error); // Debugging: Log the error
        return NextResponse.json({ message: 'Failed to update product', error }, { status: 500 });
    }
}