import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import manorama from '@/assets/home/manorama.png';
import mathrubhumi from '@/assets/home/mathrubhumi.png';
import timesIndia from '@/assets/home/timesIndia.png';
import timesNow from '@/assets/home/timesNow.png';

const Featured: FC = () => {
    const featuredLogos = [
        { src: manorama, alt: "Manorama" },
        { src: mathrubhumi, alt: "Mathrubhumi" },
        { src: timesIndia, alt: "Times of India" },
        { src: timesNow, alt: "Times Now" },
    ];

    return (
        <div className="w-full py-4 bg-white">
            <h2 className="text-4xl font-extrabold text-center mb-12">Featured On</h2>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {featuredLogos.map((logo, index) => (
                        <FeaturedLogo key={index} {...logo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface FeaturedLogoProps {
    src: StaticImageData;
    alt: string;
}

const FeaturedLogo: FC<FeaturedLogoProps> = ({ src, alt }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-32">
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