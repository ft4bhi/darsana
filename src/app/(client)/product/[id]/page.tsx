// src\app\(client)\product\[id]\page.tsx

"use client"; // Ensures this component is a client-side component

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { SelectProduct } from '@/db/schema/product/product';

const ProductDetailsPage: React.FC = () => {
    const [product, setProduct] = useState<SelectProduct | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { id } = useParams(); // Fetch the product ID from the URL

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;
            try {
                const response = await fetch(`/api/ProductApi/GetProductContent/${id}`); // Correctly include the product ID in the request URL
                if (!response.ok) {
                    throw new Error(`Failed to fetch product: ${response.statusText}`);
                }
                const data: SelectProduct = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-8">Error: {error}</div>;
    }

    if (!product) {
        return <div className="text-center mt-8">Product not found</div>;
    }

    return (
        <div className="p-4">
            {/* Image placeholder */}
            <div className="bg-gray-300 h-48 flex items-center justify-center">
                <div className="text-gray-500 text-2xl">Image</div>
            </div>

            {/* Product information */}
            <div className="p-4 flex-grow">
                <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <p className="text-gray-600 text-sm">{product.firstName}</p>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
