import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="w-full relative h-[22.375rem] text-left text-[1rem] text-gray font-inter">
      <Link href={product.link} passHref>
        <div className="absolute top-0 left-0 w-[18.5rem] h-[22.375rem] cursor-pointer">
          <img className="absolute top-0 left-[0.063rem] rounded-8xs w-[18.438rem] h-[22.375rem]" alt="Product Background" src={product.backgroundImage} />
          <div className="absolute w-[64.86%] top-[77.37%] left-[9.46%] tracking-[-0.2px] leading-[1.5rem] font-medium">
            {product.title}
          </div>
          <img className="absolute top-[16.125rem] left-0 rounded-8xs w-[18.438rem] h-[0.031rem] object-contain" alt="Divider" src={product.dividerImage} />
        </div>
      </Link>
      <img className="absolute top-[1.375rem] left-[1.75rem] w-[15.063rem] h-[12.375rem] object-cover" alt="Product Image" src={product.productImage} />
    </div>
  );
};

export default ProductCard;
