import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface EventItem {
  title: string;
  description: string;
  date: string; // ISO date string
  month: string;
}

interface EventCardProps extends EventItem { }

const EventCard: React.FC<EventCardProps> = ({ date, month, title, description }) => {
  const eventDate = new Date(date);
  const day = eventDate.getUTCDate(); // Extracting the day

  return (
    <div className="bg-blue-500 text-white rounded-lg p-6 h-full flex flex-col">
      <div className="flex flex-col items-start mb-4">
        <p className="text-5xl font-bold mb-1">{day}</p>
        <p className="text-2xl font-semibold uppercase">{month}</p>
      </div>
      <h3 className="text-lg font-bold text-center mt-auto">{title}</h3>
      <p className="text-sm text-center mt-2">{description}</p>
    </div>
  );
};

interface EventCarouselProps {
  events: EventItem[];
}

const EventCarousel: React.FC<EventCarouselProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clonedEvents, setClonedEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    setClonedEvents([...events, ...events.slice(0, 2)]);
  }, [events]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= events.length) {
        setTimeout(() => setCurrentIndex(0), 0);
        return events.length;
      }
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        setTimeout(() => setCurrentIndex(events.length - 1), 0);
        return -1;
      }
      return prevIndex - 1;
    });
  };

  const getTranslateX = () => {
    if (currentIndex === -1) return '50%';
    if (currentIndex === events.length) return `-${(events.length - 1) * 50}%`;
    return `-${currentIndex * 50}%`;
  };

  if (events.length === 0) {
    return (
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Events</h2>
          <p className="text-center">No upcoming events at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">Events</h2>
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
            aria-label="Previous event"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(${getTranslateX()})` }}
            >
              {clonedEvents.map((event: EventItem, index: number) => (
                <div key={index} className="w-1/2 flex-shrink-0 px-2">
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
            aria-label="Next event"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventCarousel;
