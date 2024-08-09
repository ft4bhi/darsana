// src/components/ProductDetails.tsx
import React from 'react';
import ProductComponent from '@/components/admin/AdminProduct/productList';

const ProductDetails: React.FC = () => {
    const productData = {
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
    };

    return (
        <div>
            <ProductComponent {...productData} />
        </div>
    );
};

export default ProductDetails;

