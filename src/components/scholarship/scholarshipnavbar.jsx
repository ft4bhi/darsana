import { useCallback } from 'react';



const ScholarshipNavbar = () => {
  	
  	const onConactUsSnavbarClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className="relative w-full flex flex-row flex-wrap items-start justify-start text-center text-mini text-black font-roboto">
      			<div className="w-[311.3px] relative bg-steelblue-200 h-[70px] text-[16px]">
        				<div className="absolute top-[17px] left-[101px] tracking-[0.16px] leading-[34.56px] font-medium">About Program</div>
      			</div>
      			<div className="w-[311.3px] relative bg-steelblue-300 h-[70px] text-white">
        				<div className="absolute top-[28px] left-[calc(50%_-_73.65px)] tracking-[0.6px] leading-[20.8px] font-medium flex items-center justify-center w-[117px] h-3.5">Eligibilty</div>
      			</div>
      			<div className="w-[311.5px] relative bg-steelblue-200 h-[70px] font-raleway">
        				<div className="absolute top-[15px] left-[calc(50%_-_52.98px)] tracking-[0.16px] leading-[34.56px] font-medium flex items-center justify-center w-[107.5px] h-[39px]">FAQ</div>
      			</div>
      			<div className="w-[311.5px] relative bg-steelblue-100 h-[70px] cursor-pointer font-raleway" onClick={onConactUsSnavbarClick}>
        				<div className="absolute top-[28px] left-[calc(50%_-_52.75px)] tracking-[0.16px] leading-[34.56px] font-medium flex items-center justify-center w-[137px] h-3.5">Contact us</div>
      			</div>
    		</div>);
};

export default ScholarshipNavbar;
