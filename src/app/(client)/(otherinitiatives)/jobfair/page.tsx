import React from 'react';
import Image from 'next/image';
import jobFairImage from 'src/assets/initiatives/Job_Fair.png';

const JobFairPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Job Fair</h1>
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

      <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed">
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
