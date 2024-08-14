'use client';
import React from 'react';
import { StaticImageData } from 'next/image'; // Import StaticImageData

// Define props interface
interface SlideProps {
    img: StaticImageData;
    title: string;
}

const Slide: React.FC<SlideProps> = ({ img, title }) => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <img src={img.src} alt={title} />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
                {/* Other content */}
            </div>
        </div>
    );
};

export default Slide;


// this how to implyment
// 'use client';
// import React from 'react';
// import HeroCarousel from '@/components/homepage/Hero';
// import { StaticImageData } from 'next/image';
// import image17 from '@/assets/home/image17.png';
// import bijuschreiyanhomeheroimage from '@/assets/home/bijuschreiyanhomeheroimage.png';
// import darsanaCommunityEventProgram from '@/assets/home/darsanaCommunityEventProgram.png';

// // Define the slide data
// const slideData = [
//     {
//         imageSrc: image17,
//         title: 'Biju Cherian Scholarship (BCS) program - Slide 1',
//     },
//     {
//         imageSrc: bijuschreiyanhomeheroimage,
//         title: 'Biju Cherian Scholarship (BCS) program - Slide 2',
//     },
//     {
//         imageSrc: darsanaCommunityEventProgram,
//         title: 'Biju Cherian Scholarship (BCS) program - Slide 3',
//     },
// ];

// const HomePage: React.FC = () => {
//     return (
//         <div>
//             <HeroCarousel
//                 slideData={slideData}
//                 autoPlay={true}
//                 interval={5000}
//             />
//             {/* Other content */}
//         </div>
//     );
// };

// export default HomePage;
