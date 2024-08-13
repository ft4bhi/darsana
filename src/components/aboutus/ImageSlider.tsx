import React, { useState, useEffect } from 'react';
import DarsanaEngineers from 'src/assets/aboutus/DarsanaEngineers.png';
import aboutimg2 from 'src/assets/aboutus/aboutimg2.jpeg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageSlider: React.FC = () => {
  const images = [
    { src: aboutimg2.src, alt: 'Another Image 1' },
    { src: DarsanaEngineers.src, alt: 'Darsana Engineers' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative mb-8 flex justify-center items-center max-w-2xl mx-auto">
      <FaArrowLeft
        className="absolute left-4 cursor-pointer text-white text-2xl z-10"
        onClick={handlePrevClick}
      />
      <img
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        className="object-cover w-full h-auto"
      />
      <FaArrowRight
        className="absolute right-4 cursor-pointer text-white text-2xl z-10"
        onClick={handleNextClick}
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;