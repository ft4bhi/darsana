
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/scholarship/client/scholarshipnavbar';
import ScholarshipHeroImage from '@/components/scholarship/client/scholarshipheroimage';
import ScholarshipApplyNowButton from '@/components/scholarship/client/scholarshipapplybutton';
const ScholarshipAboutProgram: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scholarship About Program - Biju Cheriyan Endowment</title>
        <meta name="description" content="Learn about the Biju Cheriyan Endowment scholarship program at NSS College of Engineering in Palakkad." />
        <meta name="keywords" content="scholarship, Biju Cheriyan, NSS College of Engineering, Palakkad, education" />
      </Head>
      <div className="w-full relative bg-white h-[149.875rem] overflow-hidden text-left text-[1.5rem] text-black font-roboto">
        <div className="absolute top-[41.875rem] left-[5.875rem]">
          <Navbar />
        </div>
        <ScholarshipHeroImage />
        <div className="absolute top-[49.875rem] left-[5.063rem] tracking-[0.16px] leading-[2.16rem] flex items-center w-[81.438rem] h-[12.938rem]">
          Biju Cheriyan studied Instrumentation and Control Engineering at the NSS College of Engineering in Palakkad from 1987 to 1991. Biju, who had been active in the progressive left movement since his school days, significantly contributed to shaping the campus ethos at the NSSCE. An excellent student, he was also a committed supporter of students' rights, an ardent leftist, a practical leader, a tenacious fighter, a devoted friend, and most importantly, a stunning human being. In 1997, he passed away far too soon. To preserve the memory of Biju Cheriyan and the principles he upheld, his friends formed Darsana, a group of like-minded former NSSCE students.
        </div>
        
        <div className="absolute top-[64.75rem] left-[5rem] tracking-[0.16px] leading-[2.16rem] flex items-center w-[81.438rem] h-[15.063rem]">
          One of the flagship programs of Darsana, the Biju Cheriyan Endowment, started with the modest aim of effectively intervening in the academic lives of some of the less privileged students of NSSCE. Beginning in 2008, an annual stipend of Rs. 8000 was provided to eight students of NSSCE, who were selected based on their economic status after scrutiny. Over the years, this amount has increased to Rs 12,000, with the number of beneficiaries increasing to 40 students per year. The stipend is linked to their academic performance, with graded incentives for better CGPA. Darsana is proud to have made a difference in the lives of these students. It is heartening to see that quite a few of the beneficiaries, doing well in life, enthusiastically contribute to the Endowment in whatever way possible.
        </div>
        
        <div className="absolute top-[83.438rem] left-[5rem] tracking-[0.16px] leading-[2.16rem] flex items-center w-[81.438rem] h-[12.25rem]">
          The Biju Cheriyan Endowment has grown beyond just a scholarship scheme with programs to equip students with better communication skills, career guidance sessions, and motivational talks. Darsana members have also been mentoring some beneficiaries, spending time with them, guiding them over academic and personal difficulties, and enabling them to achieve better prospects. The Endowment also organises regular academic programs to help the under-performers learn better and progress towards their B.Tech degree. The Biju Cheriyan Endowment and the Scholarship are now well-known in the college and beyond, with the number of applications growing yearly. We have regretfully rejected several suitable applicants, as the numbers are beyond our capacity to accommodate them financially and logistically.
        </div>
        
        <div className="absolute top-[97.875rem] left-[4.75rem] tracking-[0.16px] leading-[2.16rem] flex items-center w-[81.438rem] h-[9.563rem]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:12px]">&nbsp;</p>
            <p className="m-0">The Endowment is built solely through contributions from Darsana members in units of Rs.500/-. A corpus has been built up for this purpose and carefully administered by the Executive Committee. The entire Scholarship program, right from the call for applications, through shortlisting, vetting of the applications, visits to applicant's homes for verification, and finalization to the function for awarding the scholarship by the Principal, is run by Darsana members, with help from the college authorities.</p>
          </span>
        </div>
        
        <div className="absolute top-[111.063rem] left-[5rem] tracking-[0.16px] leading-[2.16rem] flex items-center w-[81.438rem] h-[7.188rem]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:12px]">&nbsp;</p>
            <p className="m-0">We handed over the scholarship amount to 16 first-year students on 26 Feb 2024 as part of our Biju Cherian Endowment Student Empowerment program at 12:00 PM in our college in the presence of the Principal and HODs. Four of the 16 scholarships are sponsored by MEANA (A North America-based Malayalee engineers' organization). The total scholarship per student per year is 16,000Rs (12,000 base amount and 4000 as an encouragement based on academic performance).</p>
          </span>
        </div>
        
        <div className="absolute top-[123.688rem] left-[5.063rem] tracking-[0.16px] leading-[2.16rem] flex items-center w-[81.438rem] h-[9.188rem]">
          Our members have done the due diligence to ensure the scholarships reach the most needy. There were more than 170 applicants this year, of which 48 were shortlisted for virtual meetings, based on which 21 students were in the final shortlist. Members from various chapters in Kerala visited their homes and provided recommendations about each of them to the committee, based on which 16 were selected. As you know, through this program, we hope to contribute to the transformation of these 16 and thereby impact their families, too.
        </div>
        
        <div className="absolute top-[125.5rem] left-[5.063rem] tracking-[0.16px] leading-[2.16rem] flex items-center w-[81.438rem] h-[14.875rem]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:12px]">&nbsp;</p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">&nbsp;</p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">&nbsp;</p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">&nbsp;</p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">Counting all four years, we will support 64 students in the due course. Thanks to each one of the Darsana family for making this happen.</p>
            <p className="m-0"> </p>
          </span>
        </div>
        <div className="absolute top-[141rem] left-[5.063rem] w-[81.438rem]">
          <ScholarshipApplyNowButton />
        </div>
      </div>
    </>
  );
};

export default ScholarshipAboutProgram;