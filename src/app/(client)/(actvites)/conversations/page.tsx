"use client";
import React, { useState } from 'react';
import Filter from '../../components/filter/filterc'; // Adjust the import path as necessary
import EventCard from '../../components/conversation/card'; // Adjust the import path as necessary

const EventsPage: React.FC = () => {
  const [filters, setFilters] = useState<{ month: string; year: string; category: string; search: string; chapter: string }>({
    month: '',
    year: '',
    category: '',
    search: '',
    chapter: '',
  });

  const events = [
    {
      title: 'DARSANA WEBINAR 3 | എംജി സുരേഷ് കുമാർ | "കേരളത്തിന്‍റെ ഊർജഭദ്രത - സാധ്യതകളും വെല്ലുവിളികളും"',
      date: '11',
      month: 'JAN',
      year: '2023',
      videoUrl: 'https://www.youtube.com/embed/ac4XAC1q5tY', // Ensure URL is correct
    },
    {
      title: 'Socio Political Webinar series',
      date: '18',
      month: 'FEB',
      year: '2023',
      videoUrl: 'https://www.youtube.com/embed/VV9maoLelHM?si=dJmuyXRBsSMkEjKB', // Replace with a valid video ID
    },
    // Add more events here
  ];

  const filteredEvents = events.filter((event) => {
    const matchesMonth = filters.month ? event.month === filters.month.toUpperCase() : true;
    const matchesYear = filters.year ? event.year === filters.year : true;
    const matchesCategory = filters.category ? event.title.toLowerCase().includes(filters.category.toLowerCase()) : true;
    const matchesSearch = filters.search ? event.title.toLowerCase().includes(filters.search.toLowerCase()) : true;
    const matchesChapter = filters.chapter ? event.title.toLowerCase().includes(filters.chapter.toLowerCase()) : true;

    return matchesMonth && matchesYear && matchesCategory && matchesSearch && matchesChapter;
  });

  return (
    <div className="container mx-auto p-4">
      <Filter onFilterChange={setFilters} />
      <div className="mt-8 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredEvents.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            month={event.month}
            year={event.year}
            videoUrl={event.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
