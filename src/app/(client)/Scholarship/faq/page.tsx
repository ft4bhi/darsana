// pages/ScholarshipFaqPage.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/scholarship/client/scholarshipnavbar';
import ScholarshipApplyNowButton from '@/components/scholarship/client/scholarshipapplybutton';
import ScholarshipHeroImage from '@/components/scholarship/client/scholarshipheroimage';
import FaqBox from '@/components/scholarship/client/scholarshipfaq';

const ScholarshipFaqPage: NextPage = () => {
  return (
    <>
    <ScholarshipHeroImage />
    <Navbar />
    <div className="w-full relative flex flex-col items-start justify-start gap-[0.812rem] text-left text-[0.938rem] text-gray font-roboto">
      <FaqBox question="What is the eligibility criteria?" answer="The eligibility criteria for the scholarship is..." />
      <FaqBox question="How to apply?" answer="To apply for the scholarship, you need to..." />
      <FaqBox question="What documents are required?" answer="You need to provide the following documents..." />
      <FaqBox question="What is the deadline?" answer="The deadline for the application is..." />
      <FaqBox question="Can I apply if I am an international student?" answer="Yes, international students can apply if..." />
      <FaqBox question="How will I be notified?" answer="You will be notified via email if..." />
    </div>
    <ScholarshipApplyNowButton />
    </>
  );
};

export default ScholarshipFaqPage;
