"use client";

import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsSearch } from "react-icons/bs";
import { IconType } from 'react-icons';

interface SocialIconProps {
    Icon: IconType;
    url: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, url }) => (
    <div
        className="header_top_icon_wrapper cursor-pointer bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
        onClick={() => window.open(url)}
    >
        <Icon className="text-gray-700 text-xl" />
    </div>
);

const HeaderMain: React.FC = () => {
    return (
        <div className='py-4'>
            <div className='container mx-auto px-4'>
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <SocialIcon Icon={BsFacebook} url="https://www.facebook.com/" />
                        <SocialIcon Icon={BsLinkedin} url="https://www.linkedin.com/" />
                        <SocialIcon Icon={BsTwitter} url="https://twitter.com/" />
                    </div>
                    <div className=' relative w-full md:w-[50%] lg:w-[40%]'>
                        <input
                            className='border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full'
                            type="search"
                            name="search"
                            placeholder='Search...'
                        />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <BsSearch className="text-gray-600 h-4 w-4 fill-current" />
                        </button>
                    </div>
                </div>
                <div className="text-gray-600 text-sm text-center md:text-left">
                    <span className="font-bold">© 2022 Darsana.</span> With our trust
                </div>
            </div>
        </div>
    );
}

export default HeaderMain;