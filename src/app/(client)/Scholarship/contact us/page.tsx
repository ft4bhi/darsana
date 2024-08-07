import type { NextPage } from 'next';
import Navbar from '@/components/scholarship/client/scholarshipnavbar';
import ScholarshipApplyNowButton from '@/components/scholarship/client/scholarshipapplybutton';
import ScholarshipHeroImage from '@/components/scholarship/client/scholarshipheroimage';
const Frame: NextPage = () => {
  return (
    <div className="w-full relative min-h-screen bg-white text-left text-[2rem] text-black font-text-regular-link">
      <div className="absolute top-[0] left-[0] w-full">
        <Navbar />
      </div>

      <div className="mt-[5rem]">
        <ScholarshipHeroImage />
      </div>

      <div className="mt-[5rem] px-4">
        <div className="w-full relative h-[11.313rem]">
          <img className="absolute top-[0.375rem] left-[0.438rem] w-[3rem] h-[3rem] overflow-hidden" alt="" src="Icon / Email.svg" />
          <div className="absolute top-[5.063rem] left-[0rem] w-[15.625rem] flex flex-col items-end justify-center gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-end justify-center gap-[1rem]">
              <b className="self-stretch relative leading-[130%]">Email</b>
              <div className="w-[25.331rem] relative text-[1rem] leading-[150%] hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</div>
            </div>
            <div className="self-stretch relative text-[1rem] [text-decoration:underline] leading-[150%]">hello@relume.io</div>
          </div>
          <div className="absolute top-[1.25rem] left-[20rem] w-[35rem] flex flex-col items-center justify-start gap-[1rem] text-center">
            <div className="self-stretch relative leading-[130%] font-semibold">Still have a question?</div>
            <div className="w-[37.625rem] relative text-[1.125rem] leading-[150%] inline-block">visit our contact us page or click the button below for taking you there</div>
          </div>
          <div className="absolute top-[0rem] left-[62.688rem] w-[15.625rem] flex flex-col items-start justify-start gap-[1.5rem]">
            <img className="w-[3rem] relative h-[3rem] overflow-hidden shrink-0" alt="" src="Icon / Phone.svg" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                <b className="self-stretch relative leading-[130%]">Phone</b>
                <div className="w-[25.331rem] relative text-[1rem] leading-[150%] hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</div>
              </div>
              <div className="self-stretch relative text-[1rem] [text-decoration:underline] leading-[150%]">+1 (555) 000-0000</div>
            </div>
          </div>
          <div className="absolute top-[8.5rem] left-[34.375rem] w-[6.25rem] h-[2.813rem] text-center text-[0.813rem] text-white">
            <div className="absolute top-[0rem] left-[0rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-royalblue w-[6.25rem] h-[2.813rem]" />
            <div className="absolute top-[0.938rem] left-[0.943rem] font-semibold inline-block w-[4.619rem] h-[1rem]">Contact us</div>
          </div>
        </div>
      </div>

      <div className="mt-8 px-4">
        <ScholarshipApplyNowButton />
      </div>
    </div>
  );
};

export default Frame;