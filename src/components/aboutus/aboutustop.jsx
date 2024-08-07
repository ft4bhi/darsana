import React from 'react';

const AboutUsTop = () => {
  return (
    <div className="relative w-full h-[321px] text-left text-13xl text-black font-arial">
      <div className="absolute top-0 left-[314px] text-[64px] font-extrabold font-roboto leading-[28.8px] tracking-[0.16px] flex items-center w-[534px] h-[175px]">
        ABOUT US
      </div>
      <div className="absolute top-[176px] left-0 leading-[28.8px] tracking-[0.16px] flex items-center w-[1082px]">
        <p className="m-0">
          We are a global diaspora of more than thousand highly experienced
        </p>
      </div>
      <div className="absolute top-[235px] left-[41px] leading-[28.8px] tracking-[0.16px] flex items-center w-[900px]">
        and socially committed engineers. We work towards making a
      </div>
      <div className="absolute top-[292px] left-[125px] leading-[28.8px] tracking-[0.16px] flex items-center w-[763px]">
        difference in the life of the needy and downtrodden.
      </div>
    </div>
  );
};

export default AboutUsTop;
