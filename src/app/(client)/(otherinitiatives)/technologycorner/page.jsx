// components/TechnologyCornerOtherInviat.tsx
"use client";

import React from 'react';
import Head from 'next/head';

const TechnologyCornerOtherInviat = () => {
    return (
        <>
            <Head>
                <title>Technology Corner - Prof. K. Viswanathan Memorial | Darsana</title>
                <meta name="description" content="Darsana established the Prof. K. Viswanathan Memorial Technology Corner at Palakkad district public library, providing reference books in engineering, management, and related subjects." />
                <meta property="og:title" content="Technology Corner - Prof. K. Viswanathan Memorial | Darsana" />
                <meta property="og:description" content="Darsana established the Prof. K. Viswanathan Memorial Technology Corner at Palakkad district public library, providing reference books in engineering, management, and related subjects." />
                <meta property="og:image" content="/path-to-your-image/Technology Corner other inviaties hero image.png" />
                <meta property="og:url" content="https://yourwebsite.com/technology-corner" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Technology Corner - Prof. K. Viswanathan Memorial | Darsana" />
                <meta name="twitter:description" content="Darsana established the Prof. K. Viswanathan Memorial Technology Corner at Palakkad district public library, providing reference books in engineering, management, and related subjects." />
                <meta name="twitter:image" content="/path-to-your-image/Technology Corner other inviaties hero image.png" />
            </Head>
            <div className="w-full relative bg-white h-[2055px] overflow-hidden text-center text-[48px] text-black font-roboto">
                <div className="absolute top-[186px] left-[273px] leading-[120%] font-extrabold inline-block w-[894px]">
                    Technology Corner
                </div>
                <div className="absolute top-[302px] left-[203px] w-[1050px] h-[647px]" />
                <div className="absolute top-[1083px] left-[41px] text-[24px] font-arial text-left inline-block w-[1367px]">
                    <p className="mt-0 mb-1">
                        Prof K Viswanathan, who was part of our Mechanical engineering
                        department, was a leading light and a guide for many of the students
                        during his tenure. He remained an influencer and a guide even after he
                        retired from the college. Through his involvement at the IRTC, he had
                        stamped a strong mark in alternative and sustainable approaches to
                        engineering practices.
                    </p>
                    <p className="mt-0 mb-1">
                        As a memorial to the beloved teacher, Darsana set up a technology
                        corner at Palakkad district public library called Prof. K. Viswanathan
                        Memorial Technology Corner. The technology corner has reference books
                        in engineering, management, and related subjects. The technology
                        corner was inaugurated by Mr. K.D Prasenan, (Hon. MLA Alathur
                        constituency). The facility is being utilized by students across the
                        district.
                    </p>
                </div>
                <img
                    className="absolute top-[320px] left-[85px] w-[1269px] h-[611px] object-cover"
                    alt="Prof. K. Viswanathan Memorial Technology Corner"
                    src="Technology Corner other inviaties hero image.png"
                />
            </div>
        </>
    );
};

export default TechnologyCornerOtherInviat;
