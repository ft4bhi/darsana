"use client"; // This is a client component

import React, { useState } from 'react';
import ContentCard from '../../../components/program/ContentCard';
import Filter from '../../../components/filter/Filter'; // Import the Filter component
import BijuCherianScholarshipImage from 'src/assets/program/BijuCherianScholarship.jpg';
import darsanaCommunityEventProgram from 'src/assets/program/darsanaCommunityEventProgram.jpg';
import DarsanaHouseImage from 'src/assets/program/DarsanaHouseImage.jpg';
import KolarGoldFieldprogram from 'src/assets/program/KolarGoldFieldprogram.png';
const Programs: React.FC = () => {
  const [filters, setFilters] = useState({
    month: '',
    year: '',
    category: '',
    search: '',
  });

  // Sample data with id and category included
  const sampleData = [
    {
      id: '1',
      title: 'Biju Cherian Scholarship (BCS) program',
      date: '26th February ',
      year: '2024',
      imageSrc: BijuCherianScholarshipImage, 
      description: 'The scholarship for the first-year batch was awarded to the 16 selected students in a function held in college.',
      venue: '',
      time: '10:00 AM - 4:00 PM',
      category: 'Scholarship',
    },
    {
      id: '2',
      title: 'Darsana - Community Engagement',
      date: '01 February',
      year: '2023',
      imageSrc: darsanaCommunityEventProgram, 
      description: 'Darsana support to Mysore Mine School and KS Vasan memorial school is continuing .',
      venue: '',
      time: '11:00 AM - 3:00 PM',
      category: 'Support',
    },
    {
      id: '3',
      title: 'House No 10 by Darsana',
      date: '01 February',
      year: '2023',
      imageSrc: DarsanaHouseImage, 
      description: 'The 10th house build by Darsana is Handed over at Palakkad.This milestone was made possible by the massive efforts of our Palakkad chapter and the house.',
      venue: '',
      time: '10:00 AM - 4:00 PM',
      category: 'House Construction',
    },
    {
      id: '4',
      title: 'Kolar Gold Fields (KGF)',
      date: '17 Dec',
      year: '2022',
      imageSrc: KolarGoldFieldprogram, 
      description: 'On behalf of the Bangalore chapter, happy to share that the first milestone of our support program to Mysore Mines School, Kolar Gold Fields (KGF) was achieved on 17 Dec 2022.',
      venue: '',
      time: '11:00 AM - 3:00 PM',
      category: 'Support',
    },
    // Add more data as needed
  ];

  // Filter the data based on the selected filters
  const filteredData = sampleData.filter((item) => {
    const dateMatch = filters.month ? item.date.includes(filters.month) : true;
    const yearMatch = filters.year ? item.year === filters.year : true;
    const categoryMatch = filters.category ? item.category.toLowerCase() === filters.category.toLowerCase() : true;
    const searchMatch = filters.search ? item.title.toLowerCase().includes(filters.search.toLowerCase()) : true;

    return dateMatch && yearMatch && categoryMatch && searchMatch;
  });

  return (
    <div className="p-8">
      {/* Filter Component */}
      <Filter onFilterChange={(newFilters) => setFilters(newFilters)} />

      {/* Content Cards */}
      <div className="flex flex-wrap grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 justify-center mt-8">
        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <ContentCard key={data.id} {...data} />
          ))
        ) : (
          <div className="text-center text-gray-600">No matching opportunities found.</div>
        )}
      </div>
    </div>
  );
};

export default Programs;
