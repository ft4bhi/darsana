'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

// Define the interface for card items
interface CardItem {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

interface EventsProps {
  items: CardItem[];
}

const Events: React.FC<EventsProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Events</h2>
        <div className="relative flex overflow-hidden">
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-lg z-10"
          >
            <Image src="/images/next.svg" alt="Previous" width={24} height={24} className="rotate-180" />
          </button>
          <div className="relative flex" style={{ width: `calc(${items.length} * 300px)` }}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 300}px)` }}
            >
              {items.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                  <Image src={item.imageSrc} alt={item.title} width={400} height={250} className="rounded-lg mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-lg z-10"
          >
            <Image src="/images/next.svg" alt="Next" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
