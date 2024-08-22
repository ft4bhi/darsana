import React, { Suspense, useCallback } from 'react';
import Profile from 'src/assets/chapter/Profile.png';
import ChapterCard from '@/components/chapter/chapterCard';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import calicutchapter from '../../../../assets/chapter/calicutchapter.png';
import Image from 'next/image';

const ReviewCard = React.lazy(() => import('@/components/program/ReviewCard'));

const CalicutChapter: React.FC = () => {
  // Event data for reviews
  const eventData = {
    reviews: [
      {
        profileImage: Profile.src,
        reviewText: 'Outstanding community support!',
        reviewerName: 'Rahul Kumar',
        category: 'Community Service',
      },
      {
        profileImage: Profile.src,
        reviewText: 'Great work in education outreach.',
        reviewerName: 'Anitha Menon',
        category: 'Education',
      },
      {
        profileImage: Profile.src,
        reviewText: 'Impressive social initiatives.',
        reviewerName: 'Vijay Rao',
        category: 'Social Welfare',
      },
    ],
  };

  // Avoid inline function definition for rendering review cards
  const renderReviewCard = useCallback(
    (review: (typeof eventData.reviews)[0], index: number) => (
      <ReviewCard
        key={index}
        profileImage={review.profileImage}
        reviewText={review.reviewText}
        reviewerName={review.reviewerName}
        category={review.category}
      />
    ),
    []
  );

  return (
    <main className="flex flex-col items-center p-4">
      <section className="text-center max-w-2xl mb-6">
        <h1 className="text-3xl font-bold">Calicut Chapter</h1>
      </section>

      <section className="w-full max-w-4xl mb-6">
        <Image
          src={calicutchapter.src}
          alt="Calicut Chapter"
          className="object-cover"
          layout="responsive"
          width={800}
          height={256}
        />
      </section>

      <section className="text-left text-xl max-w-4xl mb-6">
        <p>
          The Darsana Calicut chapter has more than 100 members. The Calicut
          chapter has taken up a few key initiatives and driven them to success.
          A few of them are:
        </p>

        {/* Content removed for brevity */}
      </section>

      <section className="reviews-section mb-10 mt-12 w-full">
        <h2 className="text-2xl font-bold text-left mb-6">Stories of Change</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Suspense fallback={<div>Loading reviews...</div>}>
            {eventData.reviews.length > 0 ? (
              eventData.reviews.map(renderReviewCard)
            ) : (
              <div className="text-center text-gray-600">
                No reviews available.
              </div>
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
