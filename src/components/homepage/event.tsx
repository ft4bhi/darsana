'use client'
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useCallback } from 'react';

interface Event {
  id: number;
  date: string;
  month: string;
  title: string;
  imageUrl: string;
}

const events: Event[] = [
  {
    id: 1,
    date: '13',
    month: 'apr',
    title: 'A day with our wonderful children',
    imageUrl: '/Event header.png',
  },
  {
    id: 2,
    date: '25',
    month: 'apr',
    title: 'Seminar: Caring for children with autism',
    imageUrl: '/Event header.png',
  },
  {
    id: 3,
    date: '13',
    month: 'apr',
    title: 'A day with our wonderful children',
    imageUrl: '/Event header.png',
  },
  {
    id: 4,
    date: '25',
    month: 'apr',
    title: 'Seminar: Caring for children with autism',
    imageUrl: '/Event header.png',
  },
  // Add more events here
];

const OurEvents: NextPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Our Events | Organization Name</title>
        <meta name="description" content="Join us for our upcoming events focused on children and autism awareness." />
        <meta name="keywords" content="events, children, autism, seminar" />
      </Head>
      <div className="w-full relative text-left text-white font-h3 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-start justify-start py-8">
          <h1 className="text-3xl md:text-4xl text-primary-text font-medium mb-4">Our Events</h1>
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative">
          <button 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full bg-white border border-black p-2 md:p-4 text-black z-10" 
            aria-label="Previous event"
            onClick={() => scroll('left')}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
          </button>
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.map((event) => (
              <div key={event.id} className="bg-steelblue rounded-xl p-6 md:p-8 flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] snap-start mr-4">
                <div className="flex items-start">
                  <div className="flex flex-col items-start mr-4">
                    <div className="text-4xl font-medium leading-tight">{event.date}</div>
                    <div className="text-sm uppercase tracking-wider font-medium">{event.month}</div>
                  </div>
                  <div className="flex-grow">
                    <Image src={event.imageUrl} alt="Event header" width={196} height={18} className="mb-4" />
                    <h2 className="text-xl md:text-2xl font-bold leading-tight mb-4">{event.title}</h2>
                  </div>
                  <FontAwesomeIcon icon={faChevronRight} className="w-8 h-8 ml-4 self-center" />
                </div>
              </div>
            ))}
          </div>
          <button 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full bg-white border border-black p-2 md:p-4 text-black z-10" 
            aria-label="Next event"
            onClick={() => scroll('right')}
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default OurEvents;