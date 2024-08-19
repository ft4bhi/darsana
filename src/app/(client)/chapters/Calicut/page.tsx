import React, { Suspense, useCallback } from 'react';
import Profile from 'src/assets/chapter/Profile.png'; 
import ChapterCard from '@/components/chapter/chapterCard';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import calicutchapter from "../../../../assets/chapter/calicutchapter.png";
import Image from 'next/image';


const ReviewCard = React.lazy(() => import('@/components/program/ReviewCard'));

const CalicutChapter: React.FC = () => {
  // Event data for reviews
  const eventData = {
    reviews: [
      {
        profileImage: Profile.src, // Using the Profile image
        reviewText: "Outstanding community support!",
        reviewerName: "Rahul Kumar",
        category: "Community Service",
      },
      {
        profileImage: Profile.src, // Using the Profile image
        reviewText: "Great work in education outreach.",
        reviewerName: "Anitha Menon",
        category: "Education",
      },
      {
        profileImage: Profile.src, // Using the Profile image
        reviewText: "Impressive social initiatives.",
        reviewerName: "Vijay Rao",
        category: "Social Welfare",
      },
    ],
  };

  // Avoid inline function definition for rendering review cards
  const renderReviewCard = useCallback((review: typeof eventData.reviews[0], index: number) => (
    <ReviewCard
      key={index}
      profileImage={review.profileImage}
      reviewText={review.reviewText}
      reviewerName={review.reviewerName}
      category={review.category}
    />
  ), []);

  return (
    <main className="flex flex-col items-center p-4">
      <section className="text-center max-w-2xl mb-6">
        <h1 className="text-3xl font-bold">Calicut Chapter</h1>
      </section>

      <section className="w-full max-w-4xl mb-6">
      <Image
        src={calicutchapter.src}
        alt="Hero Image"
        className="object-cover"
        layout="responsive"
        width={800}
        height={256}
      />
    </section>

      <section className="text-left text-xl max-w-4xl mb-6">
  <p>
    The Darsana Calicut chapter has more than 100 members. The Calicut chapter has taken up a few key initiatives and driven them to success. A few of them are:
  </p>

  <p className="mt-4">
    <strong>Soft skill training for the final-year students:</strong> In collaboration with the Palakkad chapter, we conducted a soft skills training program for the final-year students of NSSCE on October 4, 2023.
  </p>

  <p className="mt-4">
    <strong>Electronic Hardware Literacy Program at Gov. High School Nadakkaav:</strong> It is a program conceptualized by Darsana as a part of the PRISM program in the school and driven in collaboration with the students of IEEE chapter GEC Calicut to encourage electronic hardware literacy knowledge in high school students of Nadakkaav school.
  </p>

  <p className="mt-4">
    <strong>Atal Tinkering Lab training:</strong> ATAL Tinkering Lab is a government-funded program aimed at nurturing innovation skills in school children. The Calicut chapter provided training to students at Gov. Ganapt High School, Feroke, in collaboration with the faculty of Farooq College, and is planning to extend its reach to other schools.
  </p>

  <p className="mt-4">
    <strong>Adivaram House completion and handing over:</strong> As part of the Darsana My Home project, the ninth house was constructed for Kizhakkeyil Aminathatha at Adivaram, Kozhikode. The house was constructed by the Darsana team with the financial support of KCSMW (Kerala Cultural Society of Metropolitan Washington DC). The construction was done by Com. Rahul GK, a Darsana Kozhikode chapter member. Babeesh, Aneesh, and Gireesh monitored the project. With the involvement of CC, the construction was completed in October 2021, and the handing-over program was conducted on 24.10.21. Sri Linto Joseph, Hon’ble MLA, Thiruvambadi LAC, handed over the key to Aminathatha. The program was presided over by Adv. Aishakkutty Sulthan, President, Puthuppadi Grama Panchayath. Sri Anilkumar, KCS President, and Smt. Beena Tomy, President of KCS Women’s wing, joined the program online and conveyed their messages. Many people's representatives, political representatives, Darsana members, KCS representatives, and the public participated in the program.
  </p>

  <p className="mt-4">
    <strong>Student support program GEC Westhill:</strong> The Kozhikode chapter decided to extend support to weaker sections of Engineering students in GEC, Westhill to help them complete and pass the course. As a part of this program, a full-day workshop was conducted on 28.11.21 on an online platform for mentors. Dr. Baiju Sasidharan, Professor, CET, Sri Sasi, Professor, CET, and Sri Manoj, Professor, RIT, led the classes and shared their experiences in conducting similar programs at their institutions. About 60 people participated in the two sessions.
  </p>

  <p className="mt-4">
    <strong>Student support program at Mooppans tribal colony Kalpetta:</strong> To ensure the participation of children of tribal sections in Wayanad, a pilot program was planned along with the local SFI team. A study center was set up at the colony by modifying a temporary shed, and new benches, desks, tables, etc., have been provided. Additional coaching classes were conducted at this center for 10th-grade students in the colony. The program was started on 3.1.2022 and had enthusiastic participation from the children from the colony. Sixteen students from the colony attended the SSLC exams and successfully cleared them.
  </p>
</section>


      <section className="reviews-section mb-10 mt-12 w-full">
        <h2 className="text-2xl font-bold text-left mb-6">Stories of Change</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Suspense fallback={<div>Loading reviews...</div>}>
            {eventData.reviews.length > 0 ? (
              eventData.reviews.map(renderReviewCard)
            ) : (
              <div className="text-center text-gray-600">No reviews available.</div>
            )}
          </Suspense>
        </div>
      </section>

      <section className="contact-info-section mb-10 w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChapterCard
            icon={<FaEnvelope />}
            title="Email"
            description="calicut@example.com"
          />
          <ChapterCard
            icon={<FaPhone />}
            title="Phone"
            description="+91-9876543210"
          />
          <ChapterCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            description="Calicut Address, India"
          />
        </div>
      </section>
    </main>
  );
};

export default React.memo(CalicutChapter);
