import React, { Suspense, useCallback } from 'react';
import Profile from 'src/assets/chapter/Profile.png';
import ChapterCard from '@/components/chapter/chapterCard';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import uaechapter from "../../../../assets/chapter/uaechapter.png";



const ReviewCard = React.lazy(() => import('@/components/program/ReviewCard'));

const UAEChapter: React.FC = () => {
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
        <h1 className="text-3xl font-bold">UAE Chapter</h1>
      </section>
      <section className="w-full max-w-4xl mb-6">
      <Image
        src={uaechapter.src}
        alt="Hero Image"
        className="object-cover"
        layout="responsive"
        width={800}
        height={256}
      />
    </section>
      

    <section className="text-left text-xl max-w-4xl mb-6">
  <p>
    The Darsana UAE chapter has 161 members, and about 21 prospective members have been identified and invited to become members.
  </p>

  <p className="mt-4">
    <strong>1. Raag Malhar:</strong>
  </p>
  <p className="mt-2">
    An online musical event was conducted on 26th November 2021. Members and families from all the global chapters participated in the event.
  </p>

  <p className="mt-4">
    <strong>2. Technos Zest 21:</strong>
  </p>
  <p className="mt-2">
    Technos Zest is a fun family sports event held on the Technos platform in Dubai on 10th December 2021. Darsana played a leadership role in organizing the event and had the most participants.
  </p>

  <p className="mt-4">
    <strong>3. Dhow Cruise:</strong>
  </p>
  <p className="mt-2">
    A dhow cruise trip was conducted in Dubai on 27th March 2022 for the members and their families. The participation in the event was overwhelming.
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
            description="uae@example.com"
          />
          <ChapterCard
            icon={<FaPhone />}
            title="Phone"
            description="+971-123456789"
          />
          <ChapterCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            description="UAE Address, United Arab Emirates"
          />
        </div>
      </section>
    </main>
  );
};

export default React.memo(UAEChapter);
