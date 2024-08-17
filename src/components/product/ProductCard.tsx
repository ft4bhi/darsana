// // src\components\product\ProductCard.tsx
// "client";
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { products, Product as ProductType } from '@/components/product/data/ProductData';

// interface ProductCardProps {
//     product: ProductType;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//     return (
//         <Link href={`/product/${product.link}`} className="block border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
//             <div className="relative w-full h-32">
//                 <Image
//                     src={product.imageUrl}
//                     alt={product.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="absolute inset-0"
//                 />
//             </div>
//             <div className="p-4 bg-white flex flex-col justify-between h-full">
//                 <div>
//                     <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//                     <p className="text-gray-700 mb-2">{product.description}</p>
//                 </div>
//                 <div className="relative">
//                     <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white via-transparent"></div>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// export default ProductCard;

"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product as ProductType } from '@/components/product/data/ProductData';

interface ProductCardProps {
    product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link href={`/product/${product.link}`} className="block border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
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
