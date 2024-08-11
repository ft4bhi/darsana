import React from 'react';

const PresentLeadership = () => {
  const leaders = [
    { name: 'Manoj K C', role: 'President', image: '/images/President.png' },
    { name: 'Sunil N Menon', role: 'General Secretary', image: '/images/GeneralSecretary.png' },
    { name: 'Vinod P', role: 'Treasurer', image: '/images/Treasurer.png' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {leaders.map((leader, index) => (
        <div
          key={index}
          className="text-center"
          style={{ width: '332px', height: '337px' }}
        >
          <div
            className="text-center  border-4 border-[#0D1E2D] bg-[#0E5B8A] p-4 pb-0 rounded-t-lg"
            style={{ height: '100%', borderRadius: '10px' }}
          >
            <img 
              src={leader.image} 
              alt={leader.name} 
              className="w-full h-aut mx-auto mt-3 rounded-t-lg object-cover mb-0"
              style={{ height: '300px' }} />
          </div>
          <h3 className="font-bold text-lg mt-2">{leader.name}</h3>
          <p className="text-sm">{leader.role}</p>
        </div>
      ))}
    </div>
  );
};

export default PresentLeadership;
