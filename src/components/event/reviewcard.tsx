"use client";

import React from 'react';
import Image from 'next/image';
import defaultProfileImage from '/public/images/profile.png';

interface ReviewCardProps {
  profileImage?: string;
  reviewText: string;
  reviewerName: string;
  category: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  profileImage = defaultProfileImage,
  reviewText,
  reviewerName,
  category,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-2xl p-4 max-w-[375px] mx-auto relative">
      <div className="absolute -top-8 left-4 w-20 h-20"> {/* Adjusted size */}
        <div className="relative w-full h-full">
          <Image
            src={profileImage}
            alt={`${reviewerName} profile`}
            layout="fill"
            objectFit="cover"
            className="rounded-full border-2 border-white"
          />
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center text-center"> {/* Center items */}
        <p className="text-gray-700 text-lg px-4">{reviewText}</p> {/* Added px-4 for consistent padding */}
        <div className="mt-4 text-right "> {/* Removed ml-20 for consistent alignment */}
          <p className="text-gray-800 font-semibold">{reviewerName}</p>
          <p className="text-gray-500 text-sm">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;