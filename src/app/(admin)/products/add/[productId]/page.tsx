// src/app/adminProduct/productList/[productId]/page.tsx

import React from 'react';
import ProductComponent from '@/components/AdminProduct/productMainComponent';

const ProductPage = ({ params }: { params: { productId: string } }) => {
    const { productId } = params;

    // Simulate fetching the product data from your static list
    const products = [
        {
            id: 1,
            price: "$20",
            type: "T-shirt",
            material: "Cotton",
            design: "Slim Fit",
            customization: "Available",
            protection: "Standard",
            warranty: "1 Year",
            model: "LST-1001",
            style: "Casual",
            certificate: "ISO 9001",
            size: "M",
            supplierName: "Fashion Co.",
            supplierAddress: "123 Fashion St.",
            supplierContact: "+1234567890",
            supplierEmail: "contact@fashionco.com",
            description: "A comfortable and stylish long sleeve T-shirt made from 100% cotton."
        },
        // Add more products as needed
    ];

    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <ProductComponent {...product} />
        </div>
    );
};

export default ProductPage;

