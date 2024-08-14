"use client";
import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaShareAlt } from 'react-icons/fa';

// ImageComponent
interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return (
    <div className="relative mb-6">
      <img src={src} alt={alt} className="w-full h-auto max-w-lg mx-auto rounded-lg" />
    </div>
  );
};

// EventDetails
interface EventDetailsProps {
  date: string;
  time: string;
  title: string;
  description: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ date, time, title, description }) => {
  return (
    <div className="event-details mb-6">
      <div className="flex items-center mb-4">
        <p className="text-lg text-gray-600">{date} | {time}</p>
      </div>
      {/* <h2 className="text-xl font-semibold mb-2">{title}</h2> */}
      <p className="whitespace-pre-line">{description}</p>
    </div>
  );
};

// Fixed Icons for Top and Share
interface FixedIconsProps {
  className?: string; // Optional className prop to allow custom styles
}

const FixedIcons: React.FC<FixedIconsProps> = ({ className }) => {
  const [showArrow, setShowArrow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Check out this event!',
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  return (
    <div className={`fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4 flex flex-col items-center ${className}`}>
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          <FaArrowUp size={24} />
        </button>
      )}
      <button
        onClick={handleShare}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        <FaShareAlt size={24} />
      </button>
    </div>
  );
};

// Export all components
export { ImageComponent, EventDetails, FixedIcons };
