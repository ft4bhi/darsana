// components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import { Product } from './data/types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-32">
                <Image
                    src={product.imageUrl} // Should be /images/1.jpg, /images/2.jpg, etc.
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{product.price}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
