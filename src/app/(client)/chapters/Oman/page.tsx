import React, { Suspense, useCallback } from 'react';
import Profile from 'src/assets/chapter/Profile.png'; 
import ContactInfoCard from '@/components/contactinfo/ContactInfoCard';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Omanchapter from "../../../../assets/chapter/Omanchapterheroimage.png";


const heroImage = 'https://via.placeholder.com/1200x400'; // Dummy image link for the hero image

const ReviewCard = React.lazy(() => import('@/components/program/ReviewCard'));

const OmanChapter: React.FC = () => {
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
        <h1 className="text-3xl font-bold">Oman Chapter</h1>
      </section>

      <section className="w-full max-w-4xl mb-6">
      <Image
        src={Omanchapter.src}
        alt="Hero Image"
        className="object-cover"
        layout="responsive"
        width={800}
        height={256}
      />
    </section>


    <section className="text-left text-xl max-w-4xl mb-6">
  <p>
    Darsana Oman Chapter has 22 active members.
  </p>

  <p className="mt-4">
    The first of the D4 Talk Series was conducted on 22nd October, 2022. Wilson George spoke on ‘Janathipathyathinte Avasthantharangal’, which was attended by many Darsana Members.
  </p>

  <p className="mt-4">
    Oman Members & family actively participated in other chapter-driven events like Webinar, photography contest by Cochin chapter, and Raga Malhar by UAE Chapter, etc. Members actively contributed by producing promo videos to support the event organized by Darsanawomens’ team.
  </p>

  <p className="mt-4">
    Lakshmi was part of subcommittees for EYE magazine, Munderi Seva Society (Honey) initiative by Calicut Chapter. Rajesh Thampi was part of Ignite team, and Sunil Menon was part of House Construction, Mentorship, Member support, BCS, and On-boarding subcommittees.
  </p>

  <p className="mt-4">
    Members of the Oman chapter provided continued support to 3 financially poor students from Indian Schools in Oman.
  </p>

  <p className="mt-4">
    Darsana Oman Chapter is coordinating and currently providing financial support to one of the NSS Engineering College Semester-4 students.
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
            description="oman@example.com"
          />
          <ContactInfoCard
            icon={<FaPhone />}
            title="Phone"
            description="+968-12345678"
          />
          <ContactInfoCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            description="Oman Address, Oman"
          />
        </div>
      </section>
    </main>
  );
};

export default React.memo(OmanChapter);
