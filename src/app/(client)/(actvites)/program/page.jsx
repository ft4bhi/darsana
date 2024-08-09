import { useCallback } from 'react';
// import  from "../public/program/KolarGoldFieldprogram"

const ProgramList = () => {
  const onContentCardContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  const onContentCardContainer1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onContentCardContainer2Click = useCallback(() => {
    // Add your code here
  }, []);

  const onContentCardContainer12Click = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className="w-full relative bg-white h-[1421px] text-center text-7xl text-assignment-1-dark-bluish-grey font-montserrat">
      <div className="absolute top-[202px] left-[172px] w-[1098px] h-[457px] overflow-hidden">
        <div
          className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border h-[461px] flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-darkgray md:w-auto md:[align-self:unset] md:h-auto md:items-center md:justify-start sm:items-start sm:justify-center sm:pl-0 sm:box-border"
          onClick={onContentCardContainerClick}
        >
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="KolarGoldFieldprogram.svg"
          />
          <div className="w-[484px] h-[207px] flex flex-row items-start justify-start">
            <div className="w-[119px] h-[207px] flex flex-col items-start justify-start py-[23px] px-[30px] box-border">
              <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[6px]">
                <b className="relative leading-[101.1%]">01</b>
                <div className="relative text-5xl leading-[101.1%] font-semibold text-slateblue">
                  FEB
                </div>
                <b className="relative text-4xl leading-[101.1%]">2023</b>
              </div>
            </div>
            <div className="self-stretch flex-1 bg-white overflow-hidden flex flex-col items-start justify-start text-left text-lg text-assignment-1-dark-grey font-assignment-1-small-title">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="w-[365px] relative text-5xl font-semibold text-assignment-1-dark-bluish-grey [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                  Kolar Gold Fields (KGF)
                </div>
                <div className="w-[365px] relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                  Venue
                </div>
                <div className="w-[190px] relative uppercase inline-block">
                  00:00 AM - 00:00 PM
                </div>
                <div className="flex flex-row items-center justify-start gap-[9px]">
                  <div className="flex flex-row items-start justify-start gap-[7px]">
                    <img
                      className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                      alt=""
                      src="ion:ticket.svg"
                    />
                    <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                  <div className="w-[5px] relative rounded-[50%] bg-assignment-1-dark-grey h-[5px]" />
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <img
                      className="w-[21px] relative rounded-12xs-5 h-[21px]"
                      alt=""
                      src="Star 1.svg"
                    />
                    <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      10 interested
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[-2px] left-[586px] rounded-3xs bg-white box-border h-[461px] overflow-hidden flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-darkgray"
          onClick={onContentCardContainer1Click}
        >
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="DarsanaHouseImage program.svg"
          />
          <div className="w-[512px] relative h-[207px]">
            <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px] flex flex-col items-start justify-start py-[23px] px-[30px] box-border">
              <div className="flex flex-col items-center justify-start gap-[6px]">
                <b className="relative leading-[101.1%]">01</b>
                <div className="w-[50px] relative text-5xl leading-[101.1%] font-semibold text-slateblue inline-block">
                  FEB
                </div>
                <b className="relative text-4xl leading-[101.1%]">2023</b>
              </div>
            </div>
            <div className="absolute h-[66.67%] w-[71.29%] top-[8.7%] right-[5.47%] bottom-[24.64%] left-[23.24%] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-assignment-1-dark-grey font-assignment-1-small-title">
              <div className="w-[365px] relative text-5xl font-semibold text-assignment-1-dark-bluish-grey [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                House No 10 by Darsana
              </div>
              <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                Venue
              </div>
              <div className="w-[190px] relative uppercase inline-block">
                00:00 AM - 00:00 PM
              </div>
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <img
                    className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                    alt=""
                    src="ion:ticket.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    Read More
                  </div>
                </div>
                <div className="w-[5px] relative rounded-[50%] bg-assignment-1-dark-grey h-[5px]" />
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="w-[21px] relative rounded-12xs-5 h-[21px]"
                    alt=""
                    src="Star 1.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    10 interested
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[659px] left-[172px] w-[1098px] h-[717px] overflow-hidden">
        <div
          className="absolute top-[128px] left-[0px] rounded-3xs bg-white box-border w-[512px] h-[461px] overflow-hidden cursor-pointer border-[1px] border-solid border-darkgray"
          onClick={onContentCardContainer2Click}
        >
          <img
            className="absolute top-[0px] left-[0px] w-[512px] h-[254px] overflow-hidden"
            alt=""
            src="darsanaCommunityEvent Program.svg"
          />
          <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px]">
            <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px] flex flex-col items-start justify-start py-[23px] px-[30px] box-border">
              <div className="flex flex-col items-center justify-start gap-[6px]">
                <b className="relative leading-[101.1%]">01</b>
                <div className="relative text-5xl leading-[101.1%] font-semibold text-slateblue">
                  FEB
                </div>
                <b className="relative text-4xl leading-[101.1%]">2023</b>
              </div>
            </div>
            <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-assignment-1-dark-grey font-assignment-1-small-title">
              <div className="w-[365px] relative text-5xl font-semibold text-assignment-1-dark-bluish-grey [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                Darsana - Community Engagement
              </div>
              <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                Venue
              </div>
              <div className="w-[190px] relative uppercase inline-block">
                00:00 AM - 00:00 PM
              </div>
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <img
                    className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                    alt=""
                    src="ion:ticket.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    Read More
                  </div>
                </div>
                <div className="w-[5px] relative rounded-[50%] bg-assignment-1-dark-grey h-[5px]" />
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="w-[21px] relative rounded-12xs-5 h-[21px]"
                    alt=""
                    src="Star 1.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    10 interested
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[128px] left-[586px] rounded-3xs bg-white box-border w-[512px] h-[461px] overflow-hidden cursor-pointer text-left text-lg font-assignment-1-small-title border-[1px] border-solid border-darkgray"
          onClick={onContentCardContainer12Click}
        >
          <div className="absolute top-[0px] left-[0px] w-[512px] h-[254px] overflow-hidden bg-[url('scholarship_program_image_program.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[14px] left-[450px] rounded-[70px] w-12 h-12 overflow-hidden"
              alt=""
              src="Interested Button.svg"
            />
            <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-assignment-1-yellow overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
              <div className="relative font-semibold">Scolarship</div>
            </div>
          </div>
          <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-7xl font-montserrat">
            <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px] flex flex-col items-start justify-start py-[23px] px-[30px] box-border">
              <div className="flex flex-col items-center justify-start gap-[6px]">
                <b className="relative leading-[101.1%]">11</b>
                <div className="relative text-5xl leading-[101.1%] font-semibold text-slateblue">
                  JAN
                </div>
                <b className="relative text-4xl leading-[101.1%]">2023</b>
              </div>
            </div>
            <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-assignment-1-dark-grey font-assignment-1-small-title">
              <div className="w-[365px] relative text-5xl font-semibold text-assignment-1-dark-bluish-grey [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                Biju Cherian Scholarship (BCS) program
              </div>
              <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                Venue
              </div>
              <div className="w-[190px] relative uppercase inline-block">
                00:00 AM - 00:00 PM
              </div>
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <img
                    className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                    alt=""
                    src="ion:ticket.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    Read More
                  </div>
                </div>
                <div className="w-[5px] relative rounded-[50%] bg-assignment-1-dark-grey h-[5px]" />
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="w-[21px] relative rounded-12xs-5 h-[21px]"
                    alt=""
                    src="Star 1.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    10 interested
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramList;
