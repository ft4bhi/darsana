

const Heroimage = () => {
  return (
      <div className="w-full relative h-[154px] text-left text-base text-white font-roboto">
          <img className="absolute top-[-179px] left-[-70px] w-[1449px] h-[720px] object-cover" alt="" src="bijuschreiyanhomeheroimage.png" />
          <div className="absolute top-[353px] left-[17px] w-[313.2px] h-[51px] text-right">
              <div className="absolute top-[1.5px] left-[172.24px] rounded-lg bg-royalblue flex flex-row items-center justify-center py-3 px-4 gap-[8px]">
                  <img className="w-6 relative h-6" alt="" src="Play icon.svg" />
                  <div className="relative font-semibold">Play Video</div>
              </div>
              <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(80px)] rounded-lg bg-royalblue flex flex-row items-center justify-center py-4 px-8">
                  <div className="relative font-semibold">What we do</div>
              </div>
          </div>
          <h1 className="m-0 absolute top-[0px] left-[70px] text-[64px] leading-[120%] font-bold font-inherit inline-block w-[640.9px]">Empowering Dreams, Transforming Lives</h1>
          <div className="absolute top-[421px] left-[29px] text-[20px] font-extrabold text-gray inline-block w-[347px] h-[72px]">Biju Cherian Scholarship (BCS) program</div>
      </div>);
};

export default Heroimage;
