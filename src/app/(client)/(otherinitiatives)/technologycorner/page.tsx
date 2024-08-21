import React from 'react';
import Image from 'next/image';
import Technology_Corner from "@/assets/initiatives/Technology_Corner.png";

const TechnologyCornerPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-black">
          Technology Corner
        </h1>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src={Technology_Corner}
          alt="Technology Corner"
          width={600}  // Adjusted width
          height={400} // Adjusted height
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
        <p className="mb-4">
          Prof. K Viswanathan, who was part of our Mechanical Engineering department, was a leading light and a guide for many of the students during his tenure. He remained an influencer and a guide even after he retired from the college. Through his involvement at the IRTC, he had stamped a strong mark in alternative and sustainable approaches to engineering practices.
        </p>
        <p className="mb-4">
          As a memorial to the beloved teacher, Darsana set up a technology corner at the Palakkad District Public Library called Prof. K. Viswanathan Memorial Technology Corner. The technology corner has reference books in engineering, management, and related subjects.
        </p>
        <p>
          The technology corner was inaugurated by Mr. K.D. Prasanen, (Hon. MLA Alathur constituency). The facility is being utilized by students across the district.
        </p>
      </div>
    </div>
  );
};

export default TechnologyCornerPage;
