import React from 'react';
import Image from 'next/image';
import ambulance from '@/assets/initiatives/Ambulance.png';

const PalliativeCarePage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-black">
          Ambulance to Palliative Care Unit
        </h1>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src={ambulance.src}
          alt="Ambulance to Palliative Care Unit"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
        <p className="mb-4">
          Darsana contributed an Ambulance for EMS Jana Sevana Kendram, a
          Palliative Care Society, formed at Palakkad, in 2013. The fund for the
          purchase of the ambulance was generated through generous contributions
          of Darsana members. The state-of-the-art ambulance was handed over to
          the society (EMSJSK) on 13th June 2013.
        </p>
        <p>
          This initiative was widely appreciated as proof of Darsana&quot;s
          commitment to social causes.
        </p>
      </div>
    </div>
  );
};

export default PalliativeCarePage;
