import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db/index'; // Ensure this path points to your database configuration
import { products, InsertProduct } from '@/db/schema/product/product';
import { vendors, InsertVendor } from '@/db/schema/product/vendor';
import { eq } from 'drizzle-orm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { title, description, rfoImages, category, typeValuePairs, vendor } = req.body;

      // Validate the vendor data
      if (!vendor || !vendor.email) {
        return res.status(400).json({ error: 'Vendor email is required' });
      }

      // Check if the vendor already exists
      const existingVendors = await db
        .select()
        .from(vendors)
        .where(eq(vendors.email, vendor.email))
        .limit(1); // Get only the first matching vendor

      const existingVendor = existingVendors[0];

      let vendorId;
      if (existingVendor) {
        vendorId = existingVendor.id;
      } else {
        // Insert new vendor
        const newVendor: InsertVendor = {
          firstName: vendor.firstName,
          companyName: vendor.companyName,
          email: vendor.email,
          phoneNumber: vendor.phoneNumber,
          city: vendor.city,
          state: vendor.state,
          country: vendor.country,
        };

        const [insertedVendor] = await db.insert(vendors).values(newVendor).returning();
        vendorId = insertedVendor.id;
      }

      // Insert the product
      const newProduct: InsertProduct = {
        title,
        description,
        rfoImages,
        category,
        typeValuePairs,
        vendorId,
      };

      const [insertedProduct] = await db.insert(products).values(newProduct).returning();

      return res.status(201).json(insertedProduct);
    } catch (error) {
      console.error('Error inserting product:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
