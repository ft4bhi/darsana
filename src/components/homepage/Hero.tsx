import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CarouselItem {
    imageSrc: StaticImageData;
    title: string;
    subtitle?: string; // Make subtitle optional
}

interface HeroCarouselProps {
    slideData: CarouselItem[];
    autoPlay: boolean;
    interval: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slideData, autoPlay, interval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleSwipe = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            // Swipe left
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
        } else if (touchEndX.current - touchStartX.current > 50) {
            // Swipe right
            setCurrentIndex((prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length);
        }
    };

    useEffect(() => {
        if (autoPlay) {
            const autoPlayInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
            }, interval);
            return () => clearInterval(autoPlayInterval);
        }
    }, [autoPlay, interval, slideData.length]);

    return (
        <div
            className="relative w-full h-screen overflow-hidden"
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
                touchEndX.current = e.changedTouches[0].clientX;
                handleSwipe();
            }}
        >
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
                    <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 flex flex-col space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">{item.title}</h1>
                        {/* <p className="text-xl md:text-2xl text-white">{item.subtitle}</p> */}
                        <div className="flex space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Play Video
                            </button>
                            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                                What We Do
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slideData.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
