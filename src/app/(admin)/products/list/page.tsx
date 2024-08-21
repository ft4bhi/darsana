// src/app/(admin)/products/list/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import ProductTable from '@/components/AdminProduct/ProductListComponent';
import { SelectProduct } from '@/db/schema/product/products';

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<SelectProduct[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/GetProductCard'); // Fetch all products
                if (!response.ok) {
                    throw new Error(`Failed to fetch products: ${response.statusText}`);
                }
                const data: SelectProduct[] = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`/api/DeleteProduct/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }

            // Update the UI after deletion
            setProducts(products.filter(product => product.id !== id));
        } catch (err) {
            console.error(err);
            alert('Failed to delete product');
        }
    };

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-8">Error: {error}</div>;
    }

    return <ProductTable products={products} onDelete={handleDelete} />;
};

export default ProductPage;
