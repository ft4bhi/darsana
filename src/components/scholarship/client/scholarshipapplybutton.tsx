// components/scholarship/client/ScholarshipApplyNowButton.tsx

import type { NextPage } from 'next';

const ScholarshipApplyNowButton: NextPage = () => {
  return (
    <div className="w-full relative h-[8.813rem] text-center text-[2rem] font-roboto" style={{ color: '#fff' }}>
      <div className="absolute h-[70.92%] w-[83.05%] top-[29.08%] right-[16.95%] bottom-[0%] left-[0%]">
        <div 
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" 
          style={{ backgroundColor: '#0162e8' }} 
        />
        <div className="absolute h-[57.8%] w-[92%] top-[29.22%] left-[4%] font-semibold inline-block">APPLY NOW</div>
      </div>
      <div 
        className="absolute w-[75.68%] top-[0%] left-[24.32%] text-[0.938rem] leading-[150%] font-medium text-left inline-block"
        style={{ color: '#202224' }}
      >
        Click here to apply for the scholarship
      </div>
    </div>
  );
};

export default ScholarshipApplyNowButton;