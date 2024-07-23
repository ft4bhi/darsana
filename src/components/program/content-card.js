import { memo } from "react";

const ContentCard = memo(({ onContentCardContainerClick }) => {
  return (
    <div
      className="self-stretch rounded-3xs bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[18px] gap-[18px] max-w-full cursor-pointer text-center text-7xl text-assignment-1-dark-bluish-grey font-montserrat border-[1px] border-solid border-darkgray-300"
      onClick={onContentCardContainerClick}
    >
      <div className="self-stretch bg-silver-200 overflow-hidden flex flex-col items-end justify-start pt-3.5 pb-0 pr-3.5 pl-0 relative gap-[157px] mq450:gap-[39px] mq750:gap-[78px]">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image-1@2x.png"
        />
        <img
          className="w-12 h-12 relative rounded-51xl overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/interested-button.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start">
          <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-assignment-1-yellow rounded-tl-none rounded-tr-md rounded-b-none overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-gold">
            <div className="relative text-lg font-semibold font-assignment-1-small-title text-assignment-1-dark-bluish-grey text-left inline-block min-w-[90px]">
              Scolarship
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-7 pl-[30px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[32px] max-w-full mq450:gap-[16px] mq750:flex-wrap">
          <div className="w-[57px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="flex flex-row items-start justify-start py-0 px-[18px]">
                <b className="w-[21px] relative leading-[101.1%] inline-block min-w-[21px] mq450:text-2xl mq450:leading-[21px]">
                  11
                </b>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-[3.5px] text-5xl text-slateblue">
                <div className="w-[50px] relative leading-[101.1%] font-semibold inline-block min-w-[50px] mq450:text-lgi mq450:leading-[19px]">
                  JAN
                </div>
              </div>
              <b className="self-stretch relative text-4xl leading-[101.1%] inline-block min-w-[57px] mq450:text-lg mq450:leading-[19px]">
                2023
              </b>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[237px] max-w-full text-left text-lg text-assignment-1-dark-grey font-assignment-1-small-title">
            <div className="self-stretch relative text-5xl font-semibold text-assignment-1-dark-bluish-grey [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] mq450:text-lgi">
              Biju Cherian Scholarship (BCS) program
            </div>
            <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              Venue
            </div>
            <div className="w-[190px] relative uppercase inline-block whitespace-nowrap">
              00:00 AM - 00:00 PM
            </div>
            <div className="w-[286px] flex flex-row items-start justify-start gap-[8px]">
              <input
                className="m-0 h-[22px] w-[22px] relative overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="w-[94px] relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                Read More
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="w-[35px] h-[21px] relative">
                    <div className="absolute top-[8px] left-[0px] rounded-[50%] bg-assignment-1-dark-grey w-[5px] h-[5px]" />
                    <img
                      className="absolute top-[0px] left-[14px] rounded-12xs-5 w-[21px] h-[21px]"
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  10 interested
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContentCard;
