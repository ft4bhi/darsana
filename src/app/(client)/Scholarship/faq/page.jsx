import { useCallback } from 'react';
const ScholarshipFaqPage = () => {
  	
  	// const onConactUsSnavbarClick = useCallback(() => {
    // 		// Add your code here
  	// }, []);
  	
  	return (
    		<div className="w-full relative bg-white h-[1952px] overflow-hidden text-center text-13xl text-white font-roboto">
      			<div className="absolute top-[1372px] left-[427px] w-[560px] h-[85px]" />
      			<b className="absolute top-[150px] left-[352px] tracking-[0.16px] leading-[34.56px] uppercase font-roboto-condensed text-transparent !bg-clip-text [background:linear-gradient(89.86deg,_rgba(26,_27,_65,_0),_rgba(253,_241,_241,_0.9)),_linear-gradient(90.14deg,_#a2bccb,_rgba(24,_77,_183,_0.82)_26%,_#305db5_51.5%,_rgba(29,_55,_107,_0.9)_73.5%,_#223e75)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_#491fa0,_0_1px_0_#491fa0,_-1px_0_0_#491fa0,_0_-1px_0_#491fa0]">Educate With Biju Cherian Scholarship</b>
      			<div className="absolute top-[1652.22px] left-[443.04px] w-[621.9px] h-[57.8px]">
        				<b className="absolute top-[0px] left-[0px] inline-block w-[621.9px] h-[57.8px]">APPLY NOW</b>
      			</div>
      			<div className="absolute top-[676px] left-[70px] flex flex-row flex-wrap items-start justify-start text-mini text-black">
        				<div className="w-[311.3px] relative bg-steelblue-200 h-[70px] text-[16px]">
          					<div className="absolute top-[17px] left-[101px] tracking-[0.16px] leading-[34.56px] font-medium">About Program</div>
        				</div>
        				<div className="w-[311.3px] relative bg-steelblue-200 h-[70px]">
          					<div className="absolute top-[28px] left-[calc(50%_-_73.65px)] tracking-[0.6px] leading-[20.8px] font-medium flex items-center justify-center w-[117px] h-3.5">Eligibilty</div>
        				</div>
        				<div className="w-[311.5px] relative bg-steelblue-300 h-[70px] text-white font-raleway">
          					<div className="absolute top-[15px] left-[calc(50%_-_52.98px)] tracking-[0.16px] leading-[34.56px] font-medium flex items-center justify-center w-[107.5px] h-[39px]">FAQ</div>
        				</div>
        				<div className="w-[311.5px] relative bg-steelblue-100 h-[70px] cursor-pointer font-raleway" onClick={onConactUsSnavbarClick}>
          					<div className="absolute top-[28px] left-[calc(50%_-_52.75px)] tracking-[0.16px] leading-[34.56px] font-medium flex items-center justify-center w-[137px] h-3.5">Contact us</div>
        				</div>
      			</div>
    		</div>);
};

export default ScholarshipFaqPage;
