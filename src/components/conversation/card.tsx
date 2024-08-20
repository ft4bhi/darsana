import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  month: string;
  year: string;
  videoUrl: string;
  category?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  month,
  year,
  videoUrl,
  category,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-blue-500">
      <div className="relative w-full h-80">
        <iframe
          src={videoUrl}
          title={`${title} video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-4 flex">
        <div className="mr-4 flex flex-col items-center">
          <span className="text-lg font-bold text-blue-600">{date}</span>
          <span className="text-lg font-bold text-blue-600">{month}</span>
          <span className="text-sm font-semibold text-gray-600">{year}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          {/* These properties are not visible but can be used internally or for filtering */}
          {/* {category && <p className="text-sm text-gray-600">Category: {category}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
