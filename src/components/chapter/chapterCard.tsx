import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ChapterCardProps {
  icon: React.ReactNode; // Allow any React node (element) for the icon
  title: string;
  description: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ icon, title, description }) => (
  <Link href={`/chapters/${title.toLowerCase()}`} passHref>
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-64 flex items-center justify-center bg-gray-100">
        {icon}
      </div>
      <div className="p-4 text-center bg-white">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </Link>
);

export default ChapterCard;
