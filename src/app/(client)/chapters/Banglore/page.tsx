import React, { Suspense, useCallback } from 'react';
import Profile from 'src/assets/chapter/Profile.png';
import ChapterCard from '@/components/chapter/chapterCard';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Bangalorechapter from '../../../../assets/chapter/bangalorechapterheroimage.png';

// Lazy load the ReviewCard component
const ReviewCard = React.lazy(() => import('@/components/program/ReviewCard'));

const BengaluruChapter: React.FC = () => {
  // Sample event data for reviews
  const eventData = {
    reviews: [
      {
        profileImage: Profile.src,
        reviewText: 'This is a great initiative!',
        reviewerName: 'John Doe',
        category: 'Education',
      },
      {
        profileImage: Profile.src,
        reviewText: 'Incredible work by the team.',
        reviewerName: 'Jane Smith',
        category: 'Healthcare',
      },
      {
        profileImage: Profile.src,
        reviewText: 'Remarkable efforts by everyone involved.',
        reviewerName: 'Alice Brown',
        category: 'Community Support',
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
    [eventData]
  );

  return (
    <main className="flex flex-col items-center p-4">
      <section className="text-center max-w-2xl mb-6">
        <h1 className="text-3xl font-bold">Bengaluru Chapter</h1>
      </section>

      <section className="w-full max-w-4xl mb-6">
        <Image
          src={Bangalorechapter.src}
          alt="Hero Image"
          className="object-cover"
          layout="responsive"
          width={800}
          height={256}
        />
      </section>

      <section className="text-left text-xl max-w-4xl mb-6">
        <p>
          Darsana Bangalore Chapter has 115 members, with a large portion
          employed in the IT sector. Chapter activities were coordinated with a
          chapter committee of 20 people and 3 permanent invitees. Some of the
          initiatives undertaken by the Bangalore chapter include:
        </p>

        <p className="mt-4">
          <strong>Members of the Bangalore chapter</strong> played a significant
          role in ensuring the success of IGNITE 2023 and were actively involved
          in the 2024 program.
        </p>

        <p className="mt-4">
          <strong>Darsana Fund collection:</strong> Members of the Bangalore
          chapter have contributed to the Darsana Fund. Fund collection for the
          current year is ongoing, and chapter members are actively
          participating.
        </p>

        <p className="mt-4">
          <strong>BCES (Biju Cherian Endowment Scholarship) Program:</strong>{' '}
          Bangalore Chapter manages back-end activities for candidate selection,
          including application form management, shortlisting, and interview
          scheduling.
        </p>

        <p className="mt-4">
          <strong>Support To Society:</strong> With the objective of supporting
          the community we are in, a School at Kolar Gold Fields that requires
          our intervention was visited by Com. Arunan, Vineeth VS, and Sathian
          in June 2022. This School has Pre-Primary, Primary, and Secondary
          classes. The students are from poor backgrounds. They are the children
          of daily wagers of the area. The school is supported by the CPM for
          its operation. The number of teachers is less than the number of
          classes/divisions. The salary for the teachers is very low and is not
          paid regularly. There is no support up to 7th standard from the
          government, and the school is managed with the meager fees of
          Rs.200/month received from students. Bangalore chapter started the
          support for the school in Nov-2022. Initially, we set up a library and
          sports equipment for the children. Major support provided on an
          ongoing basis is the salary for two teachers (12000/-), textbooks, and
          notebooks for students during the start of the academic year, awards
          to students for sports and arts competitions, etc. Our team provides
          guidance on improving the quality of teaching as well. Also, with
          support from the US chapter, we are providing egg supplements to all
          primary school children. We have conducted three visits during the
          year to discuss the progress, conduct workshops, and attend the Award
          Ceremony.
        </p>

        <p className="mt-4">
          <a
            href="https://darsana.makanerp.com/activity_details/kolar-gold-fields-kgf"
            className="text-blue-500"
          >
            For more information, read here
          </a>
        </p>

        <p className="mt-4">
          <strong>Darsana Website:</strong> The Bangalore chapter is responsible
          for maintaining the updates on the Darsana website.
        </p>

        <p className="mt-4">
          <strong>Engaging activities for members:</strong> We arranged 3
          catch-up meetings at Indira Nagar, Cubbon Park, and Koramangala. The
          meet-up at Koramangala was intended for members from 2015-2023. We had
          a good turnout, with many members attending. In addition, we held an
          online meeting for the same group to connect with new members. We also
          organized a Badminton Tournament near Krishnarajapuram, which was
          attended by 12 members and their families.
        </p>

        <p className="mt-4">
          <strong>Fun Events:</strong>
        </p>
        <p className="mt-2 ml-4">
          <strong>Darsana Online Chess Competition:</strong> The Darsana-wide
          chess tournament was held on 1st June 2024, with 28 members and family
          members participating. Reyhan Aniz (son of Aniz) from the Bangalore
          chapter secured first place. JithinKrishna (son of Jyothikrishna from
          the UAE chapter) secured second place, and Amal Raj from the 2022
          batch from the Cochin chapter secured third place. Among the junior
          participants, Jonathon (son of Jeeson from the 2006 batch) earned the
          highest points.
        </p>
        <p className="mt-2 ml-4">
          <strong>Badminton Tournament:</strong> Bangalore chapter organized a
          Badminton Tournament on May 26, 2024. Fifteen people, including family
          members, participated in the event.
        </p>

        <p className="mt-4">
          <strong>Political Activism:</strong> Our members participate in major
          events conducted by the Bangalore secular forum. In the past, we have
          organized programs like anti-CAA protest seminars etc.
        </p>

        <p className="mt-4">
          <strong>Programs conducted in the previous years</strong>
        </p>

        <p className="mt-4 ml-4">
          <strong>Fun Events:</strong>
        </p>
        <p className="mt-2 ml-8">
          <strong>Chess Tournament conducted in Jul-2023:</strong> More than 40
          Darsana members and family participated. Babu George (1989 batch) won
          the 1st prize. Fahad (son of Latheef 1991) secured second place, and
          Sooryakiran (2021 batch) secured third place.
        </p>
        <p className="mt-2 ml-8">
          <strong>Euro Cup prediction Contest:</strong> The prediction contest
          winners were: Deego and Sathian.
        </p>
        <p className="mt-2 ml-8">
          <strong>Caption Contest:</strong> “Adikkurippu Malsaram” was conducted
          among chapter members on 17th November 2021. The Winners were Asif
          Ramthan and Biju K. Com. Vineeth PS and Com. Jeeson organized the
          contest.
        </p>
        <p className="mt-2 ml-8">
          <strong>Film-Based Fun Quiz:</strong> A filmi fun quiz, “70 MM Cinema
          Pranth Quiz” was organized for the whole Darsana family. There was an
          encouraging response to the program. It was hosted by Sindhu P R and
          organized with the support of Comrades Vineeth P S and Jeeson. The
          Winners were Kiran (Palakkad Chapter 2009), Sudhish (Bangalore Chapter
          – 2002), Deego (Bangalore Chapter – 2010).
        </p>

        <p className="mt-4">
          <strong>Darsana Job Portal:</strong> The main objective of the portal
          is to help Darsana members to find a job or to move to better roles
          and jobs. The portal provides a single platform to pool all the job
          requirements known to Darsana members across the globe. Com.
          Krishnakumar inaugurated the job portal on 8th January 2022. It was
          well received initially, and our members have put up several job
          openings. Gradually, the use of the portal showed a downtrend. In the
          coming year, we must brainstorm and take corrective actions to
          re-energize the platform. The job portal was designed and realized
          under the leadership of Com. Ajith Prasad, Com. Jose Varghese, and
          Com. Arjun K P.
        </p>

        <p className="mt-4">
          <strong>Career Explorer Talk:</strong> An online expert panel
          discussion was conducted to guide engineering students in choosing
          their career paths after completing their Degrees. This was open to
          all Engineering students across Kerala. It was planned as a series of
          sessions to cover all the engineering branches. The first in this
          series, “Career Paths in IT”, was conducted on 22 Jan 2022. The
          Panelists were Com. Mukundan Annamalai, Com. Arunan Thayyil, and Com.
          Dinesh I. The other sessions planned in the series were put on hold as
          the student crowd&apos;s participation was not as high as expected. An
          analysis following the first session indicated that student
          communities, in general, are not giving priority to such webinars.
        </p>

        <p className="mt-4">
          Com. Mukundan Annamalai conducted two talks with the students on the
          NSSCE campus. The students received these talks well.
        </p>

        <p className="mt-2 ml-4">
          The talks were: “Future of Information Technology” on 27th Oct 2021
          and “A Typical Day in a Large IT Organization” on 26th Nov 2021.
        </p>
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
            description="bengaluru@example.com"
          />
          <ChapterCard
            icon={<FaPhone />}
            title="Phone"
            description="+91-1234567890"
          />
          <ChapterCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            description="Bengaluru Address, India"
          />
        </div>
      </section>
    </main>
  );
};

export default React.memo(BengaluruChapter);
