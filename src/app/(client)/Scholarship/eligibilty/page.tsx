// pages/scholarship/eligibility.tsx

import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/scholarship/client/scholarshipnavbar';
import ScholarshipApplyNowButton from '@/components/scholarship/client/scholarshipapplybutton';
import ScholarshipHeroImage from '@/components/scholarship/client/scholarshipheroimage';
const EligibilityCriteriaBe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eligibility Criteria - Biju Cheriyan Endowment Scholarship</title>
        <meta name="description" content="Eligibility criteria and required documents for the Biju Cheriyan Endowment scholarship at NSS College of Engineering in Palakkad." />
        <meta name="keywords" content="scholarship, eligibility, Biju Cheriyan, NSS College of Engineering, Palakkad, education" />
      </Head>
      <div className="w-full relative bg-white min-h-screen overflow-hidden text-left text-[1.5rem] text-black font-roboto">
        <div className="absolute top-[41.875rem] left-[5.875rem]">
          <Navbar />
        </div>
        
        <ScholarshipHeroImage />
        
        <div className="mt-[50rem] mx-auto max-w-[55.188rem] px-4">
          <div className="text-[2.5rem] tracking-[1px] leading-[2.5rem]">
            <p className="m-0">Eligibility Criteria:</p>
            <ul className="m-0 font-inherit text-inherit pl-[1.325rem]">
              <li className="my-[undefined] mx-[undefined]">Be a resident of India.</li>
              <li className="my-[undefined] mx-[undefined]">Be a school or college student.</li>
              <li className="my-[undefined] mx-[undefined]">Fall within the age range of 5 to 25 years.</li>
            </ul>
            <p className="m-0">Documents Required:</p>
            <ul className="m-0 font-inherit text-inherit pl-[1.325rem]">
              <li className="my-[undefined] mx-[undefined]">Student ID proof(ID Card) issued by College.</li>
              <li className="my-[undefined] mx-[undefined]">Passport size Photo.</li>
              <li className="my-[undefined] mx-[undefined]">Aadhaar Card.</li>
              <li className="my-[undefined] mx-[undefined]">Income certificate</li>
              <li>Check</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 mx-auto max-w-[55.188rem] px-4">
          <ScholarshipApplyNowButton />
        </div>
      </div>
    </>
  );
};

export default EligibilityCriteriaBe;