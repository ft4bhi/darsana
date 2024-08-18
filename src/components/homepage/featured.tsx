import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import manorama from '@/assets/home/featured/manorama.png';
import mathrubhumi from '@/assets/home/featured/mathrubhumi.png';
import timesIndia from '@/assets/home/featured/timesIndia.png';
import timesNow from '@/assets/home/featured/timesNow.png';

const Featured: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const featuredLogos = [
        { src: manorama, alt: "Manorama" },
        { src: mathrubhumi, alt: "Mathrubhumi" },
        { src: timesIndia, alt: "Times of India" },
        { src: timesNow, alt: "Times Now" },
        { src: manorama, alt: "Manorama" },

        // Add more logos here to see the effect
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredLogos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? featuredLogos.length - 1 : prevIndex - 1
        );
    };

    const getVisibleLogos = () => {
        const visibleLogos = [];
        for (let i = 0; i < 4; i++) {
            const index = (currentIndex + i) % featuredLogos.length;
            visibleLogos.push(featuredLogos[index]);
        }
        return visibleLogos;
    };

    return (
        <div className="w-full py-8 bg-white">
            <h2 className="text-4xl font-extrabold text-center mb-12">Featured On</h2>
            <div className="container mx-auto px-4 relative">
                {featuredLogos.length > 4 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
                            aria-label="Previous logo"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
                            aria-label="Next logo"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}
                <div className="overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {getVisibleLogos().map((logo, index) => (
                            <FeaturedLogo key={index} {...logo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface FeaturedLogoProps {
    src: StaticImageData;
    alt: string;
}

const FeaturedLogo: React.FC<FeaturedLogoProps> = ({ src, alt }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-32 transition-all duration-300">
            <Image
                src={src}
                alt={alt}
                width={150}
                height={80}
                objectFit="contain"
            />
        </div>
    );
};

export default Featured;