import React from "react";
import Image from "next/image";

interface SlideProps {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<SlideProps> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] group">
      <Image
        className="rounded-xl object-cover"
        src={img}
        alt="banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-8 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-xl transition duration-300 ease-in-out">
        <h3 className="text-sky-400 text-[24px] lg:text-[28px] group-hover:text-opacity-100 transition duration-300 ease-in-out">
          {title}
        </h3>
        <h2 className="text-white text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2] group-hover:text-opacity-100 transition duration-300 ease-in-out">
          {mainTitle}
        </h2>
        <h3 className="text-[24px] text-gray-200 group-hover:text-opacity-100 transition duration-300 ease-in-out">
          starting at{" "}
          <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
          .00
        </h3>
        <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div>
      </div>
    </div>
  );
};

export default Slide;
