// src/components/homepage/HeroCarousel.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

// Define props interface
interface CarouselItem {
    imageSrc: StaticImageData;
    title: string;
}

interface HeroCarouselProps {
    slideData: CarouselItem[];
    autoPlay: boolean;
    interval: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slideData, autoPlay, interval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length);
    };

    useEffect(() => {
        if (autoPlay) {
            const autoPlayInterval = setInterval(handleNext, interval);
            return () => clearInterval(autoPlayInterval);
        }
    }, [autoPlay, interval]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {slideData.map((item, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{item.title}</h1>
                        {/* Other content */}
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
