import React, { Suspense, useCallback } from 'react';
import Profile from 'src/assets/chapter/Profile.png'; 
import ContactInfoCard from '@/components/contactinfo/ContactInfoCard';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import saudichapter from "../../../../assets/chapter/noimage.png";


const ReviewCard = React.lazy(() => import('@/components/program/ReviewCard'));

const SaudiChapter: React.FC = () => {
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
        <h1 className="text-3xl font-bold">Saudi Chapter</h1>
      </section>

      <section className="w-full max-w-4xl mb-6">
      <Image
        src={saudichapter.src}
        alt="Hero Image"
        className="object-cover"
        layout="responsive"
        width={800}
        height={256}
      />
    </section>



    <section className="text-left text-xl max-w-4xl mb-6">
  <p>
    The Saudi chapter currently has 19 members and 10 prospective members. The 2021 AGB elected a coordination committee (CC) for conducting and coordinating activities for the chapter.
  </p>

  <p className="mt-4">
    The Saudi chapter conducted “Chithrarachanamatsaram 2021” for children below 15 years of Darsana members. Nine entries were received in two sections: below and above 10 years. The judging panel selected first, second, and third prizes for each age group, and prizes were distributed in an online function.
  </p>

  <p className="mt-4">
    Saudi chapter member Shiju Paul worked in EYE magazine subcommittees. More members are needed to volunteer for such activities.
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
          <ContactInfoCard
            icon={<FaEnvelope />}
            title="Email"
            description="saudi.chapter@example.com"
          />
          <ContactInfoCard
            icon={<FaPhone />}
            title="Phone"
            description="+966 123 456 789"
          />
          <ContactInfoCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            description="123 Darsana Street, Riyadh, Saudi Arabia"
          />
        </div>
      </section>
    </main>
  );
};

export default React.memo(SaudiChapter);
