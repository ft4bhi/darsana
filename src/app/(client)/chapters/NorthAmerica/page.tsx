import React, { Suspense, useCallback } from 'react';
import Profile from 'src/assets/chapter/Profile.png';
import ChapterCard from '@/components/chapter/chapterCard';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import NorthAmericachapter from "../../../../assets/chapter/saudichapter.png";



const ReviewCard = React.lazy(() => import('@/components/program/ReviewCard'));

const NorthAmericaChapter: React.FC = () => {
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
        <h1 className="text-3xl font-bold">North America Chapter</h1>
      </section>

      <section className="w-full max-w-2xl mb-6">
      <Image
        src={NorthAmericachapter.src}
        alt="Hero Image"
        className="object-cover"
        layout="responsive"
        width={800}
        height={256}
      />
    </section>



    <section className="text-left text-xl max-w-4xl mb-6">
  <p>
    As one of Darsana’s newest chapters, Darsana North America comprises over 30 active members from the US and Canada. Guided by the executive committee, we are focused on expanding our membership and fostering regional leadership.
  </p>

  <p className="mt-4">
    A cornerstone of our efforts is collaborating with the Indian community in the US and Canada to support house construction projects for marginalized groups. In the past year, we partnered with the Kerala Cultural Society of Metropolitan Washington (KCS) to build three homes for those in need. We are excited to continue this partnership, with plans to construct a fourth house this year. Last year’s project, which involved creating a home for a differently-abled individual in Mannar, Alappuzha, was successful. This project, coordinated with the Darsana Kochi and Calicut Chapter, culminated in a key handover by Honorable Minister Com: Saji Cherian, who was in attendance.
  </p>

  <p className="mt-4">
    Our US chapter members are also active on our digital platform. Despite the challenges of a limited number of Indian-affiliated progressive organizations in North America, we are building connections with various groups to strengthen our collaborations and develop joint programs.
  </p>

  <p className="mt-4">
    We value our partnerships with cultural organizations such as FOKANA and FOMAA for their charitable, educational, and volunteer initiatives. Additionally, two Darsana members participated in the Loka Kerala Sabha regional conference in New York last year, contributing to discussions and networking to advance our goals in North America.
  </p>

  <p className="mt-4">
    Furthering our impact, the Darsana US chapter collaborates with the Bangalore chapter to provide nutritious food for children at Kolar Gold Field School, addressing nutritional deficiencies and supporting their overall well-being.
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
            description="northamerica@example.com"
          />
          <ChapterCard
            icon={<FaPhone />}
            title="Phone"
            description="+1-123-456-7890"
          />
          <ChapterCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            description="North America Address, USA"
          />
        </div>
      </section>
    </main>
  );
};

export default React.memo(NorthAmericaChapter);
