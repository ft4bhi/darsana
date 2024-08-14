// pages/api/addProduct.ts or app/api/addProduct/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            // Process the form data here
            // You might want to save it to a database or send it to another service
            console.log(req.body);
            
            // Simulating a successful operation
            res.status(200).json({ message: 'Product added successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error adding product' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}