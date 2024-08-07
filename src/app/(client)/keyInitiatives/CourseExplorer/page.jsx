// components/CourseExplorerKeyInvitative.tsx
"use client";

import React from 'react';
import Head from 'next/head';

const CourseExplorerKeyInvitative = () => {
    return (
        <>
            <Head>
                <title>Course Explorer 2021 - Darsana</title>
                <meta name="description" content="Course Explorer 2021 was an online awareness program organized by the Darsana Calicut chapter for students in 11th and 12th grades to explore engineering degree courses." />
                <meta property="og:title" content="Course Explorer 2021 - Darsana" />
                <meta property="og:description" content="Course Explorer 2021 provided insights into various engineering branches through expert sessions, helping students make informed decisions about their future studies." />
                <meta property="og:image" content="/path-to-your-image/course-explorer-key-invitative-hero-image.png" />
                <meta property="og:url" content="https://yourwebsite.com/course-explorer-key-invitative" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Course Explorer 2021 - Darsana" />
                <meta name="twitter:description" content="Course Explorer 2021 provided insights into various engineering branches through expert sessions, helping students make informed decisions about their future studies." />
                <meta name="twitter:image" content="/path-to-your-image/course-explorer-key-invitative-hero-image.png" />
            </Head>
            <div className="w-full relative bg-white h-[2435px] overflow-hidden text-center text-[48px] text-black font-roboto">
                <div className="absolute top-[186px] left-[273px] leading-[120%] font-extrabold inline-block w-[894px]">
                    <p className="m-0">Course Explorer</p>
                </div>
                <div className="absolute top-[1682px] left-[23px] text-[24px] font-arial text-left inline-block w-[1417px]">
                    <p className="[margin-block-start:0] [margin-block-end:5px]">
                        The Darsana Calicut chapter organized an online awareness programme
                        for students in the 11th and 12th grades who aspire to join
                        engineering degree courses. The three-day programme titled ‘Course
                        Explorer 2021’ was conducted from August 27, 2021, to August 29, 2021.
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:5px]">&nbsp;</p>
                    <p className="[margin-block-start:0] [margin-block-end:5px]">
                        Academicians from reputed institutes handled the sessions about the
                        undergraduate programmes for various branches of engineering. Each
                        hour-long session included a presentation by the expert followed by a
                        question-answer session.
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:5px]">&nbsp;</p>
                    <p className="[margin-block-start:0] [margin-block-end:5px]">
                        The sessions on the first day were handled by Dr K. V. Gangadharan
                        (Mechanical Engineering Department, NIT Surathkal), and Dr E. R.
                        Ushakumary (Chemical Engineering Department, GEC Kozhikode). Dr Indu
                        P. Nair (Electrical Engineering Department, COE Kidangoor) and Dr
                        Madhu Mohan (Electronics Engineering Department, Amrita School of
                        Engineering) handled the sessions on the second day. The third day had
                        four sessions conducted by Dr K. A. Abdul Nazeer (Computer Science
                        Department, NIT Calicut), Dr Shyni Anilkumar (Department of
                        Architecture, NIT Calicut), Dr George K. Varghese (Civil Engineering
                        Department, NIT Calicut), and Dr K. B. Radhakrishnan (Biotechnology
                        Department, SCT CE, Trivandrum). The event attracted students from
                        both Kerala and outside.
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:5px]">&nbsp;</p>
                    <p className="m-0">
                        Around 325 students attended sessions on courses that were in great
                        demand. Overall, it was a very valuable programme that helped students
                        gather information about the curriculum, specific requirements, and
                        opportunities of each course.
                    </p>
                </div>
                <img
                    className="absolute top-[358px] left-[410px] w-[678px] h-[1271px] object-cover"
                    alt="Course Explorer 2021 hero image"
                    src="course explorer key invitatives hero image.png"
                />
            </div>
        </>
    );
};

export default CourseExplorerKeyInvitative;
