import React from 'react';
import Image from 'next/image';

interface ProductHighlightProps {
  title: string;
  subtitle: string;
  buttonText: string;
  images: string[];
}

const ProductHighlight: React.FC<ProductHighlightProps> = ({ title, subtitle, buttonText, images }) => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-8">
          <h2 className="text-5xl font-bold mb-4 leading-snug">{title}</h2>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-600 transition duration-300 mt-4">
            {buttonText}
          </button>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-6 gap-4">
          <div className="col-span-6 relative overflow-hidden rounded-lg">
            <Image
              src={images[0]}
              alt="Product image 1"
              layout="responsive"
              width={600}
              height={300}
              objectFit="cover"
            />
          </div>
          <div className="col-span-3 relative overflow-hidden rounded-lg">
            <Image
              src={images[1]}
              alt="Product image 2"
              layout="responsive"
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
          <div className="col-span-3 relative overflow-hidden rounded-lg">
            <Image
              src={images[2]}
              alt="Product image 3"
              layout="responsive"
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;