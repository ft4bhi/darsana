// import React from 'react';
// import { SelectProduct } from '@/db/schema/product/products';

// interface ProductCardProps {
//     product: SelectProduct;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//     return (
//         <div className="border rounded-lg shadow-sm bg-white overflow-hidden flex flex-col">
//             {/* Image placeholder */}
//             <div className="bg-gray-300 h-48 flex items-center justify-center">
//                 <div className="text-blue-500 text-2xl">Image</div>
//             </div>

//             {/* Product information */}
//             <div className="p-4 flex-grow">
//                 <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
//                 <p className="text-gray-600 text-sm">{product.description}</p>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;


import React from 'react';
import { useRouter } from 'next/navigation'; // Correct import for app directory
import { SelectProduct } from '@/db/schema/product/products';

interface ProductCardProps {
    product: SelectProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${product.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="border rounded-lg shadow-sm bg-white overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow"
        >
            {/* Image placeholder */}
            <div className="bg-gray-300 h-48 flex items-center justify-center">
                <div className="text-gray-500 text-2xl">Image</div>
            </div>

            {/* Product information */}
            <div className="p-4 flex-grow">
                <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
