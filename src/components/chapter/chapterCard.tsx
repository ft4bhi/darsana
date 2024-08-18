"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface Chapter {
  name: string;
  image: string;
  slug: string;
}

interface ChapterCardProps {
  chapter: Chapter;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => (
  <Link href={`/chapters/${chapter.slug}`} passHref>
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-64">
        <Image
          alt={chapter.name}
          src={chapter.image}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 text-center bg-white">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{chapter.name}</h3>
        <p className="text-gray-600 text-sm">Explore more about this chapter</p>
      </div>
    </div>
  </Link>
);

export default ChapterCard;
