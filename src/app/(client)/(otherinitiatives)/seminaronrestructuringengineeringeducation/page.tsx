import React from 'react';
import Image from 'next/image';
import seminarImage from 'src/assets/initiatives/seminar_image.jpg'; // Update this path as needed

const SeminarPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Seminar on Restructuring Engineering Education</h1>
      </div>

      <div className="flex justify-center mb-8">
        <Image 
          src={seminarImage.src} 
          alt="Seminar on Restructuring Engineering Education"
          layout="responsive"
          width={700}
          height={475}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed">
        <p className="mb-4">
          The seminar we conducted at Palakkad Fort Palace was a roaring success.
        </p>
        <p className="mb-4">
          Participants from 15 colleges out of the 18 colleges under the University of Calicut attended. Parents, University staff members, students from many colleges, teachers from almost all colleges, and the controller of exams were all present at the function. The total number of participants was 118. The seminar maintained the schedule and the discussions were all to the point. Eminent personalities from IIT Madras, NIT Calicut, Anna University, Amrita University (deemed), etc. were present. Principals of 6 engineering colleges attended and expressed their views. Members from the media fraternity, who visited, appreciated the seriousness of the seminar.
        </p>
        <p className="mb-4">
          The "Open House" was vibrant with divergent views and effective inputs from all sections of the participants. The controller of exams mentioned that the way we have conducted the seminar proves beyond doubt that we are "up to doing something concrete." A follow-up council with about 90 members with representation from all 18 colleges was constituted. A 14-member executive committee was formed to spearhead the activities of the council. Mr. Sreenadhan is the convener of the EC, and four Darsana members are also part of the executive committee.
        </p>
        <p>
          Darsana has established itself as a renowned name in all the Engineering colleges under the University of Calicut, and also among the "who is who" at the University of Calicut and some other major universities.
        </p>
      </div>
    </div>
  );
};

export default SeminarPage;
