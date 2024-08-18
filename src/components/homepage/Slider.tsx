'use client';
import React from 'react';
import { StaticImageData } from 'next/image'; // Import StaticImageData
import { Link } from 'react-router-dom';

// Define props interface
interface SlideProps {
    img: StaticImageData;
    title: string;
    link: string; // Added link prop
}

const Slide: React.FC<SlideProps> = ({ img, title, link }) => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Link to={link}>
                <img src={img.src} alt={title} className="w-full h-full object-cover" />
            </Link>
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
                {/* Other content */}
            </div>
        </div>
    );
};

export default Slide;
