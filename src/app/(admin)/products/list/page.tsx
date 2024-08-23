//src\app\(admin)\products\list\page.tsx

"use client";
import React, { useEffect, useState } from 'react';
import ProductTable from '@/components/AdminProduct/productMainComponent';
import { SelectProduct } from '@/db/schema/product/product';
import { useRouter } from 'next/navigation';

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<SelectProduct[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/ProductApi/AdminGetProductCard');
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

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`/api/ProductApi/DeleteProduct/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }

            setProducts(products.filter(product => product.id !== id));
        } catch (err) {
            console.error(err);
            alert('Failed to delete product');
        }
    };

    const handleToggleVisibility = async (id: number) => {
        try {
            const response = await fetch(`/api/ProductApi/ToggleProductVisibility/${id}`, {
                method: 'PUT',
            });

            if (!response.ok) {
                throw new Error('Failed to toggle product visibility');
            }

            const data = await response.json();

            setProducts(products.map(product =>
                product.id === id ? { ...product, isVisible: data.isVisible } : product
            ));
        } catch (err) {
            console.error(err);
            alert('Failed to toggle product visibility');
        }
    };

    const handleEdit = (id: number) => {
        router.push(`/products/edit/${id}`);
    };

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-8">Error: {error}</div>;
    }

    return (
        <ProductTable
            products={products}
            onDelete={handleDelete}
            onToggleVisibility={handleToggleVisibility}
            onEdit={handleEdit}
        />
    );
};

export default ProductPage;