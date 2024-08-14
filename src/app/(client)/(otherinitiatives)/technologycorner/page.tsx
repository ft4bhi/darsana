import React from 'react';
import Technology_Corner from "@/assets/initiatives/Technology_Corner.png";

const TechnologyCornerPage: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Technology Corner
                </h1>
            </div>

            <div className="flex justify-center my-8">
                <img
                    src={Technology_Corner.src}
                    alt="Technology Corner"
                    className="w-full max-w-4xl rounded-lg shadow-lg"
                />
            </div>

            <div className="text-gray-700 leading-loose">
                <p className="mb-4">
                    Prof K Viswanathan, who was part of our Mechanical engineering department, was a leading light and a guide for many of the students during his tenure. He remained an influencer and a guide even after he retired from the college. Through his involvement at the IRTC, he had stamped a strong mark in alternative and sustainable approaches to engineering practices.
                </p>
                <p className="mb-4">
                    As a memorial to the beloved teacher, Darsana set up a technology corner at Palakkad district public library called Prof. K. Viswanathan Memorial Technology Corner. The technology corner has reference books in engineering, management, and related subjects.
                </p>
                <p className="mb-4">
                    The technology corner was inaugurated by Mr. K.D Prasanen, (Hon. MLA Alathur constituency). The facility is being utilized by students across the district.
                </p>
            </div>
        </div>
    );
};

export default TechnologyCornerPage;
