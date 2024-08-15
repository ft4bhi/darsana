import React from 'react';
import Image from 'next/image';
import jobFairImage from 'src/assets/initiatives/Job_Fair.png';

const JobFairPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-black">
          Job Fair
        </h1>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src={jobFairImage.src}
          alt="Job Fair organized by Darsana"
          width={700}
          height={475}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
        <p className="mb-4">
          Darsana conducted a massive job fair on 1st & 2nd August 2008 at Govt. Victoria College. By far, it is the largest event organized by Darsana. The job fair helped Darsana become a popular name in and around Palakkad.
        </p>
        <p className="mb-4">
          Darsana was a partner for the Deshabhimani Job fair held at Kozhikode from 17th to 20th October 2013. Darsana members played a key role in the conducting of the job fair.
        </p>
      </div>
    </div>
  );
};

export default JobFairPage;
