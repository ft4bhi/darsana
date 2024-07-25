import React from 'react';
import Image from 'next/image';

interface SlideProps {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Slide: React.FC<SlideProps> = ({ img, title, mainTitle, price }) => {
    return (
        <div className="outline-none border-none relative flex flex-col md:flex-row items-center md:items-start md:space-x-6 lg:space-x-12 p-4 md:p-8">
            <div className="relative md:w-1/2 lg:w-1/3 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none space-y-4 lg:space-y-6">
                <h3 className="text-sky-400 text-[24px] lg:text-[28px]">{title}</h3>
                <h2 className="text-black text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">{mainTitle}</h2>
                <h3 className="text-[24px] text-gray-500">
                    starting at <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>.00
                </h3>
                <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
                    Shop Now
                </div>
            </div>
            <div className="relative w-full md:w-1/2 lg:w-2/3 max-w-[600px] lg:max-w-[800px]">
                <Image
                    className="w-full h-[300px] md:h-auto rounded-xl object-cover object-center md:object-left-bottom"
                    src={img}
                    alt="banner"
                    width={2000}
                    height={2000}
                    layout="responsive"
                />
            </div>
        </div>
    );
}

export default Slide;
