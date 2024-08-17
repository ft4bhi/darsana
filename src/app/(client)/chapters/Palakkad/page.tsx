import React, { Suspense, useCallback } from 'react';
import Profile from 'src/assets/chapter/Profile.png'; 
import ContactInfoCard from '@/components/contactinfo/ContactInfoCard';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import palkkadchapter from "../../../../assets/chapter/palkkadchapterheroimage.png";


const ReviewCard = React.lazy(() => import('@/components/program/ReviewCard'));

const PalakkadChapter: React.FC = () => {
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
        <h1 className="text-3xl font-bold">Palakkad Chapter</h1>
      </section>

      <section className="w-full max-w-4xl mb-6">
      <Image
        src={palkkadchapter.src}
        alt="Hero Image"
        className="object-cover"
        layout="responsive"
        width={800}
        height={256}
      />
    </section>

    <section className="text-left text-xl max-w-4xl mb-6">
  <p>
    The Palakkad chapter plays an active role in the planning, organization, campaigning, and execution of many programs of Darsana. The chapter has a 16-member coordination committee, and regular online CC meetings are happening. The specific programs for which the Palakkad chapter had a major role to play in the last year are listed below.
  </p>

  <p className="mt-4">
    <strong>1. IGNITE 2023:</strong>
  </p>
  <p className="mt-2">
    The Ignite project aims to create an ecosystem available to students, technologists, or anyone with a creative mind, to experiment, create, revise, and evolve along with our panel of technical experts and mentors. As part of this initiative, we have set up a platform called IGNITE, consisting of a web portal (www.ignite.darsana.in) as a medium of exchange and a team of academicians, senior professionals from various engineering streams, and experienced business owners to nurture the dream ideas into reality. Through the annual ‘IGNITE Innovation and Entrepreneurship Challenge’, we introduced this platform to the educational institutions in Kerala. The finale of this year’s edition was on 12 August 2023, at Govt. Polytechnic College, Palakkad. The chapter has been able to ensure active participation of its members in the successful running of the program. Our members are present in the leadership roles of the program as well.
  </p>

  <p className="mt-4">
    <strong>1.1 MoU signing with KSUM:</strong>
  </p>
  <p className="mt-2">
    In a full-day event held at Palakkad on 17 February 2023, various discussions were conducted to discuss and deliberate about the ways to tap the entrepreneurial potential of the Malabar region in Kerala. The function was attended by eminent business stakeholders of Palakkad. Our members, Anirudhan, Vinod, Radhakrishnan, Niranjan, Krishna Mohan, Prasad Mathew, Ajith Mohan, Mukundhan, Farih, and Pradeep, also attended the event representing Darsana. KSUM handed over the MoU signed with Darsana to Vinod P., treasurer, Darsana, furthering the cause of innovation and entrepreneurship in Kerala.
  </p>

  <p className="mt-4">
    <strong>2. Biju Cherian Endowment Scholarship:</strong>
  </p>
  <p className="mt-2">
    The chapter coordinated BCES house visits with the help of Trivandrum, Ernakulam, and Calicut chapters. Houses of students shortlisted for the BCES scholarship were visited by Darsana members to understand the situation of the students and finalize the beneficiaries for the scholarship. 16 new students were selected for the scholarship after proper verification of their background. The scholarship was distributed to the new beneficiaries on 26 February 2024.
  </p>

  <p className="mt-4">
    <strong>3. BCES Mentorship Program:</strong>
  </p>
  <p className="mt-2">
    The BCES beneficiaries of the second and third years were allotted mentors for any additional support they may require. A team of mentors was formed from within the Palakkad chapter. All the mentors stayed in touch with their mentee(s) and contacted them at least once a month to inquire about and address their general well-being as well as academic concerns. A review meeting was held once a month to discuss the issues faced by the mentees and to ensure timely interventions if required under the guidance of K. A. Nandajan – counselor, trainer, mentor, and a member of the Darsana Palakkad chapter. Multiple workshops were conducted as part of the BCES Mentorship Program for the mentees and mentors.
  </p>

  <p className="mt-4">
    <strong>‘Break the Shackles’:</strong>
  </p>
  <p className="mt-2">
    A one-day workshop was organized for the mentees on 23 April 2023, at Sayoojyam Residency, Palakkad. 18 students and 10 mentors participated in the workshop. The workshop was led by K. A. Nandajan, Manoj Kumar, and Neeraj C. R., all of them Darsana Palakkad members. To accommodate the new batch of BCES beneficiaries in the program, new members were added to the mentors’ group. ‘Learn the Art of Mentoring’, a three-day online workshop (from 22 to 24 June 2023), was organized to prepare the new mentors to face the challenges of mentoring and as a refresher course for the existing mentors. The program was organized and coordinated by the Palakkad chapter and saw the participation of over 20 members.
  </p>

  <p className="mt-4">
    <strong>‘Lear, Unlearn, and Relearn’:</strong>
  </p>
  <p className="mt-2">
    A one-day workshop was organized for the mentees on 5 November 2023, at Sayoojyam Residency, Palakkad. 17 students and 11 mentors participated in the workshop. The workshop was led by K. A. Nandajan, Manoj Kumar, Neeraj (Darsana Palakkad members), and Adarsh.
  </p>

  <p className="mt-4">
    <strong>4. Educational Intervention:</strong>
  </p>

  <p className="mt-2">
    <strong>4.1 Ummini School Visit for Helping with ATL:</strong> The school authorities of Ummini Government School raised a request to Darsana to help with activities in the Innovation Lab, which was set up in 2019 and was not being utilized by the students due to a lack of facilitators. 7 members of Darsana visited the lab on 31 January to understand the exact requirements. The lab has several advanced pieces of equipment, such as 3D printers, robotics kits, etc. Workshops and student projects using the facilities in the Lab are under the plan of the Palakkad chapter activities.
  </p>

  <p className="mt-4">
    <strong>4.2 Handover of Tables and Chairs to Ummini School:</strong> As per the request from authorities of Ummini Government School, a set of 9 tables and chairs were handed over to the school on 11 February 2023 in the presence of the principal, teachers, and Darsana members. Darsana incurred a total expenditure of 37,900 rupees, which was collected entirely from within the chapter.
  </p>

  <p className="mt-4">
    <strong>5. Housing Project:</strong>
  </p>
  <p className="mt-2">
    The 10th house constructed under the supervision of Darsana at Anjumurthi, Vadakkencheri, was handed over to the beneficiary in the presence of P. P. Sumod MLA, Panchayath president, KCSMW representative, Darsana members, and the local public. The house was funded by the women’s wing of KCSMW, USA. Darsana US chapter also played an important role in coordinating the work. 17 Darsana members (14 from the Palakkad chapter) participated.
  </p>

  <p className="mt-4">
    <strong>6. Membership Campaign:</strong>
  </p>
  <p className="mt-2">
    As part of our membership campaign, a meeting was organized on 18 June 2023 to welcome the associate members who joined us from the recently graduated batches. Com. Ajith Zachariah distributed the memberships to all the new members.
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
            description="palakkad@example.com"
          />
          <ContactInfoCard
            icon={<FaPhone />}
            title="Phone"
            description="+91-1234567890"
          />
          <ContactInfoCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            description="Palakkad Address, Kerala"
          />
        </div>
      </section>
    </main>
  );
};

export default React.memo(PalakkadChapter);
