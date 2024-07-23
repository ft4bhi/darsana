import { useCallback } from 'react';



const Activites = () => {
  	
  	const onImage56Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onNodeClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className="w-full relative h-[356px] text-center text-6xl text-gray font-poppins">
      			<div className="absolute top-[189px] left-[0px] w-[319px] h-[118.1px] flex flex-col items-start justify-start py-0 pr-0 pl-[78px] box-border gap-[19px]">
        				<h3 className="m-0 w-[180px] relative text-inherit leading-[33px] capitalize font-bold font-inherit inline-block h-10 shrink-0">Conversation</h3>
        				<div className="w-[319px] relative text-base leading-[24px] capitalize font-roboto text-dimgray inline-block h-[58.6px] shrink-0">
          					<p className="m-0">We analyse your website’s structure,</p>
          					<p className="m-0">{`internal architecture & other key`}</p>
        				</div>
      			</div>
      			<div className="absolute top-[3px] left-[404.65px] w-[445.3px] h-[353px]">
        				<h3 className="m-0 absolute top-[185.66px] left-[541.68px] text-inherit leading-[33px] capitalize font-bold font-inherit inline-block w-[172.4px] h-[40.3px]">Gallery</h3>
        				<div className="absolute top-[245.51px] left-[137.02px] text-base leading-[24px] capitalize font-roboto text-dimgray inline-block w-[344.7px] h-[58.6px]">
          					<p className="m-0">We are well known within the industry</p>
          					<p className="m-0">for our technical capabilities</p>
        				</div>
      			</div>
      			<div className="absolute top-[189px] left-[953px] w-[363px] h-[118px]">
        				<h3 className="m-0 absolute top-[0px] left-[1033.25px] text-inherit leading-[33px] capitalize font-bold font-inherit">Initiatives</h3>
        				<div className="absolute top-[59.85px] left-[80.49px] text-base leading-[24px] capitalize font-roboto text-dimgray inline-block w-[292.2px] h-[58.6px]">
          					<p className="m-0">4517 Washington Ave. Manchester</p>
          					<p className="m-0">Kentucky 39495</p>
        				</div>
      			</div>
      			<img className="absolute top-[30px] left-[553.5px] w-[149px] h-[149px] object-cover cursor-pointer" alt="" src="image 56.png" onClick={onImage56Click} />
      			<img className="absolute top-[0px] left-[1004px] w-[196px] h-[210.7px] overflow-hidden cursor-pointer" alt="" src="6170572_3014248 1.svg" onClick={onNodeClick} />
      			<img className="absolute top-[13px] left-[71px] w-[187px] h-[187px] overflow-hidden" alt="" src="3238375_44135 1.svg" />
    		</div>);
};

export default Activites;
