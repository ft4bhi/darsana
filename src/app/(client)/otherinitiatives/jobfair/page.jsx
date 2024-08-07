// components/JobFairOtherInviaties.tsx
"use client";

import React from 'react';
import Head from 'next/head';

const JobFairOtherInviaties = () => {
    return (
        <>
            <Head>
                <title>Job Fair - Darsana Initiatives</title>
                <meta name="description" content="Darsana conducted a massive job fair on 1st & 2nd August 2008 at Govt. Victoria College, helping it become a popular name in and around Palakkad. Darsana was also a partner for the Deshabhimani Job fair held at Kozhikode in 2013." />
                <meta property="og:title" content="Job Fair - Darsana Initiatives" />
                <meta property="og:description" content="Darsana conducted a massive job fair on 1st & 2nd August 2008 at Govt. Victoria College, helping it become a popular name in and around Palakkad. Darsana was also a partner for the Deshabhimani Job fair held at Kozhikode in 2013." />
                <meta property="og:image" content="/path-to-your-image/job-fair-other-inviaties-hero-image.png" />
                <meta property="og:url" content="https://yourwebsite.com/job-fair" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Job Fair - Darsana Initiatives" />
                <meta name="twitter:description" content="Darsana conducted a massive job fair on 1st & 2nd August 2008 at Govt. Victoria College, helping it become a popular name in and around Palakkad. Darsana was also a partner for the Deshabhimani Job fair held at Kozhikode in 2013." />
                <meta name="twitter:image" content="/path-to-your-image/job-fair-other-inviaties-hero-image.png" />
            </Head>
            <div className="w-full relative bg-white h-[2055px] overflow-hidden text-center text-[48px] text-black font-roboto">
                <div className="absolute top-[186px] left-[273px] leading-[120%] font-extrabold inline-block w-[894px]">
                    Job Fair
                </div>
                <div className="absolute top-[1083px] left-[41px] text-[24px] font-arial text-left inline-block w-[1367px]">
                    <p className="[margin-block-start:0] [margin-block-end:1px]">{`Darsana conducted a massive job fair on 1st & 2nd August 2008 at Govt. Victoria College. By far, It is the largest event organized by Darsana. The job fair helped Darsana become a popular name in and around Palakkad.`}</p>
                    <p className="[margin-block-start:0] [margin-block-end:1px]"> </p>
                    <p className="[margin-block-start:0] [margin-block-end:1px]">
                         Darsana was a partner for the Deshabhimani Job fair held at Kozhikode
                        from 17th to 20th October 2013. Darsana members played a key role in
                        the conducting of the job fair.
                    </p>
                </div>
                <img
                    className="absolute top-[320px] left-[236px] w-[967px] h-[611px] object-cover"
                    alt="Job Fair hero image"
                    src="job fair other inviaties hero image.png"
                />
            </div>
        </>
    );
};

export default JobFairOtherInviaties;
