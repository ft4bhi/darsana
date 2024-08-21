import React from 'react';

const Timeline = () => {
  const events = [
    { year: '2007', description: 'Darsana was formed on 5th August 2007' },
    { year: '2008', description: 'The first job fair by Darsana on 1st and 2nd August 2008' },
    { year: '2008', description: 'Conceptualized Akathethara Waste Management project' },
    { year: '2009', description: 'Biju Cherian endowment talks started' },
    { year: '2010', description: 'Established Prabhakaran Memorial Best project award' },
    { year: '2013', description: 'Darsana donates an Ambulance for EMS Jana Sevana Kendram' },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="relative">
        {/* Bold Timeline Connector Line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#f0f0f0] border-8 border-[#003d6e] transform -translate-x-1/2 z-0"
        />
        <div className="relative flex flex-col z-10">
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12 relative`}
            >
              {/* SVG Arrow as Place Marker */}
              <svg
                className={`absolute top-1/2 ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} transform ${index % 2 === 0 ? '-translate-x-1/2' : 'translate-x-1/2'} -translate-y-1/2`}
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="10" fill="#003d6e" />
                <path
                  d={`M ${index % 2 === 0 ? '30' : '30'} 30 L ${index % 2 === 0 ? '30' : '30'} 50`}
                  stroke="#003d6e"
                  strokeWidth="3"
                  fill="none"
                />
                <polygon
                  points={`${index % 2 === 0 ? '30,50 25,45 35,45' : '30,50 25,55 35,55'}`}
                  fill="#003d6e"
                />
              </svg>

              <div
                className={`flex flex-col items-center ${index % 2 === 0 ? 'mr-6' : 'ml-6'}`}
                style={{
                  marginLeft: index % 2 === 0 ? '0' : '20px',
                  marginRight: index % 2 === 0 ? '20px' : '0',
                }}
              >
                <div className="bg-gradient-to-r from-[#005b96] to-[#003d6e] text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
                  {event.year}
                </div>
                <div
                  className={`mt-2 px-4 py-2 rounded-lg bg-white shadow-md text-[#005b96] border border-[#005b96] ${
                    index % 2 === 0 ? 'ml-4' : 'mr-4'
                  }`}
                  style={{
                    maxWidth: '300px',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                  }}
                >
                  <p className="text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
