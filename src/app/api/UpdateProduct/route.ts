import { NextApiRequest, NextApiResponse } from 'next';
import { ProductsDb, products } from '@/db/schema/product/products';
import { eq } from 'drizzle-orm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('Request method:', req.method); // Debugging: Log the request method
    console.log('Request body:', req.body);     // Debugging: Log the request body

    if (req.method === 'PUT') {
        const { id, title, description, category, typeValuePairs, firstName, companyName, email, phoneNumber, city, state, country } = req.body;

        try {
            const updatedProduct = await ProductsDb
                .update(products)
                .set({
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
                    country,
                })
                .where(eq(products.id, id))
                .returning();

            console.log('Updated product:', updatedProduct); // Debugging: Log the updated product

            res.status(200).json(updatedProduct);
        } catch (error) {
            console.error('Update failed:', error); // Debugging: Log the error
            res.status(500).json({ message: 'Failed to update product', error });
        }
    } else {
        console.warn('Method not allowed:', req.method); // Debugging: Warn about the wrong method
        res.status(405).json({ message: 'Method not allowed' });
    }
}
