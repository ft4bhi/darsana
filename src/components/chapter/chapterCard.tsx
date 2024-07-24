"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface Chapter {
  name: string;
  image: string;
}

interface ChapterCardProps {
  chapter: Chapter;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => (
  <Link href={`/chapters/${chapter.name}`}>
    <div className="border rounded-lg overflow-hidden cursor-pointer">
      <Image
        alt={chapter.name}
        src={chapter.image}
        width={402}
        height={216}
        layout="responsive"
        className="object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="font-bold">{chapter.name}</h3>
      </div>
    </div>
  </Link>
);

export default ChapterCard;
