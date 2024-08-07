// components/HeroCarousel.tsx
import React, { useState } from 'react';
import type { NextPage } from 'next';

interface CarouselItem {
  imageSrc: string;
  title: string;
}

const carouselItems: CarouselItem[] = [
  {
    imageSrc: 'bijuschreiyanhomeheroimage1.png',
    title: 'Biju Cherian Scholarship (BCS) program - Slide 1',
  },
  {
    imageSrc: 'bijuschreiyanhomeheroimage2.png',
    title: 'Biju Cherian Scholarship (BCS) program - Slide 2',
  },
  {
    imageSrc: 'bijuschreiyanhomeheroimage3.png',
    title: 'Biju Cherian Scholarship (BCS) program - Slide 3',
  },
  // Add more items as needed
];

const HeroCarousel: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="w-full relative h-[9.625rem] text-left text-[1rem] text-white font-roboto">
      <img
        className="absolute top-[-11.187rem] left-[-4.375rem] w-[90.563rem] h-[45rem] object-cover"
        alt=""
        src={carouselItems[currentIndex].imageSrc}
      />
      <div className="absolute top-[22.063rem] left-[1.063rem] w-[19.575rem] h-[3.188rem] text-right">
        <div className="absolute top-[0.094rem] left-[10.765rem] rounded-lg bg-royalblue flex flex-row items-center justify-center py-[0.75rem] px-[1rem] gap-[0.5rem]">
          <img className="w-[1.5rem] relative h-[1.5rem]" alt="" src="Play icon.svg" />
          <div className="relative font-semibold">Play Video</div>
        </div>
        <div className="absolute top-[0rem] left-[0rem] [backdrop-filter:blur(80px)] rounded-lg bg-royalblue flex flex-row items-center justify-center py-[1rem] px-[2rem]">
          <div className="relative font-semibold">What we do</div>
        </div>
      </div>
      <h1 className="m-0 absolute top-[0rem] left-[4.375rem] text-[4rem] leading-[120%] font-bold font-[inherit] inline-block w-[40.056rem]">
        Empowering Dreams, Transforming Lives
      </h1>
      <div className="absolute top-[26.313rem] left-[1.813rem] text-[1.25rem] font-extrabold text-gray inline-block w-[21.688rem] h-[4.5rem]">
        {carouselItems[currentIndex].title}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default HeroCarousel;
