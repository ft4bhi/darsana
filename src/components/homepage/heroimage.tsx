'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselItem {
  imageSrc: string;
  title: string;
}

const carouselItems: CarouselItem[] = [
  {
    imageSrc: '/public/why.jpg',
    title: 'Biju Cherian Scholarship (BCS) program - Slide 1',
  },
  {
    imageSrc: '/images/bijuschreiyanhomeheroimage2.png',
    title: 'Biju Cherian Scholarship (BCS) program - Slide 2',
  },
  {
    imageSrc: '/images/bijuschreiyanhomeheroimage3.png',
    title: 'Biju Cherian Scholarship (BCS) program - Slide 3',
  },
];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={item.imageSrc}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Empowering Dreams, Transforming Lives
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">{item.title}</p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center">
                <Image src="/images/next.svg" alt="Play" width={24} height={24} />
                <span className="ml-2">Play Video</span>
              </button>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg">
                What we do
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        <Image src="/images/next.svg" alt="Previous" width={24} height={24} className="rotate-180" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        <Image src="/images/next.svg" alt="Next" width={24} height={24} />
      </button>
    </div>
  );
};

export default HeroCarousel;