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
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-6">{subtitle}</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            {buttonText}
          </button>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <div key={index} className={`relative ${index === 0 ? 'col-span-2' : ''} overflow-hidden rounded-lg`}>
              <Image
                src={src}
                alt={`Product image ${index + 1}`}
                layout="responsive"
                width={500}
                height={index === 0 ? 300 : 250}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;