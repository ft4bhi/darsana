// components/SkillDevelopementProgramKey.tsx
"use client";

import React from 'react';
import Head from 'next/head';

const SkillDevelopementProgramKey = () => {
    return (
        <>
            <Head>
                <title>Skill Development Program - Empowering Students for Successful Careers</title>
                <meta name="description" content="The Skill Development Program is designed to help students build rewarding careers by providing them with essential skills and boosting their self-confidence to face interviews." />
                <meta property="og:title" content="Skill Development Program - Empowering Students for Successful Careers" />
                <meta property="og:description" content="The Skill Development Program is designed to help students build rewarding careers by providing them with essential skills and boosting their self-confidence to face interviews." />
                <meta property="og:image" content="/path-to-your-image/skill-developement-program-key-inviatives-hero-image.png" />
                <meta property="og:url" content="https://yourwebsite.com/skill-developement-program-key" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Skill Development Program - Empowering Students for Successful Careers" />
                <meta name="twitter:description" content="The Skill Development Program is designed to help students build rewarding careers by providing them with essential skills and boosting their self-confidence to face interviews." />
                <meta name="twitter:image" content="/path-to-your-image/skill-developement-program-key-inviatives-hero-image.png" />
            </Head>
            <div className="w-full relative bg-white h-[2055px] overflow-hidden text-center text-[48px] text-black font-roboto">
                <div className="absolute top-[186px] left-[273px] leading-[120%] font-extrabold inline-block w-[894px]">
                    <p className="m-0">Skill Development Program</p>
                </div>
                <div className="absolute top-[1083px] left-[41px] text-[24px] font-arial text-left inline-block w-[1367px]">
                    As a part of the initiatives to help students to build rewarding
                    careers, we decided to conduct a program for 45 deserving students to
                    give them the skills they need and boost their self-confidence to face
                    interviews. In 2008, we jointly launched this program with the college's
                    placement cell, and the students responded positively. The skill
                    development program has grown significantly over time.
                </div>
                <img
                    className="absolute top-[320px] left-[236px] w-[967px] h-[611px] object-cover"
                    alt="Skill development program key initiatives hero image"
                    src="skill developement program key inviatives hero image.png"
                />
            </div>
        </>
    );
};

export default SkillDevelopementProgramKey;
