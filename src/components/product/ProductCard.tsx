// components/ProductCard.tsx

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface Product {
    title: string;
    imageUrl: StaticImageData;
    description: string;
    link: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link href={`/product/}`} className="block border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="relative w-full h-32">
                <Image
                    src={product.imageUrl}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                />
            </div>
            <div className="p-4 bg-white flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                </div>
                <div className="relative">
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white via-transparent"></div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
