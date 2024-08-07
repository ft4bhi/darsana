"use client"; // This is a client component

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface ContentCardProps {
  id: string;
  title: string;
  date: string;
  year: string;
  imageUrl: string;
  description: string;
  venue: string;
  time: string;
  category: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  id,
  title,
  date,
  year,
  imageUrl,
  description,
  venue,
  time,
  category,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden w-full max-w-lg">
      <div className="relative w-full h-64 bg-white border-b border-gray-200">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg border border-gray-300"
          quality={75}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <div className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full">
            {category}
          </div>
          <div className="ml-4 text-sm text-gray-600">
            <span>{date}</span>
            <span className="ml-1">{year}</span>
          </div>
        </div>
        <h2 className="mt-2 text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-1 text-gray-600">{venue}</p>
        <p className="mt-1 text-gray-500 text-sm">{time}</p>
        <p className="mt-2 text-gray-600">{description}</p>
        <Link href={`/events/${id}`} className="text-blue-500 mt-4 inline-block">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ContentCard;