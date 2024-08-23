"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { SelectProduct } from '@/db/schema/product/product';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<SelectProduct[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/ProductApi/GetProductCard'); // Fetch all products
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data: SelectProduct[] = await response.json();
        console.log('Fetched products:', data);
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="text-center col-span-full">No products found</div>
      )}
    </div>
  );
};

export default ProductPage;
