"use client"; // Ensure this is a client component

import React from 'react';
import { useParams } from 'next/navigation'; // Import useParams to get the event ID from the URL
import { ImageComponent, EventDetails, FixedIcons } from '../../../../../components/event/event'; // Adjust the path as needed
import ReviewCard from '../../../../../components/program/ReviewCard'; // Adjust the path as needed
import BijuCherianScholarshipImage from '@/assets/program/BijuCherianScholarship.jpg';
import darsanaCommunityEventProgram from '@/assets/program/darsanaCommunityEventProgram.jpg';
import DarsanaHouseImage from '@/assets/program/DarsanaHouseImage.png';
import KolarGoldFieldprogram from '@/assets/program/KolarGoldFieldprogram.png';
import Profile from '@/assets/program/Profile.png';
// Define the type for review data
type Review = {
  profileImage: string;
  reviewText: string;
  reviewerName: string;
  category: string;
};

// Define the type for event data, including reviews
type EventData = {
  imageSrc: string;
  imageAlt: string;
  date: string;
  time: string;
  title: string;
  description: string;
  reviews: Review[]; // Add reviews to event data
};

// Create a type for the events data object
type EventsData = {
  [key: string]: EventData; // Use string as key to index into the events data
};

// Mock data for demonstration purposes
const eventsData: EventsData = {
  '1': {
    imageSrc: BijuCherianScholarshipImage.src,
    imageAlt: 'Event Image 1',
    date: '26th February, 2024',
    time: ' 4:00 PM',
    title: 'Biju Cherian Scholarship (BCS) program',
    description: `The scholarship for the first-year batch was awarded to the 16 selected students in a function held in college on 26th February 2024.  The Principal and HODs attended this function along with many members from Darsana. 

Performance based additional awards were handed over to the eligible students as well during this function.  Happy to note that most of the students receiving this prestigious award are doing well in their studies.

And a Big Thank You to all Darsana members who wholeheartedly contribute to making this flagship program a big success.`,
    reviews: [
        {
            profileImage: Profile.src,
            reviewText: 'Incredible initiative! Well done, Bangalore chapter!',
            reviewerName: 'Sophia Anderson',
            category: 'Member Communication Officer',
          },
          {
            profileImage: Profile.src,
            reviewText: 'Heartwarming event,Inspiring work by Darsana.',
            reviewerName: 'Sophia Anderson',
            category: 'Member Communication Officer',
          },
          {
            profileImage: Profile.src,
            reviewText: 'Wonderful collaboration, US Chapter!',
            reviewerName: 'Stephen Brakke',
            category: 'Logistics Integration Producer',
          },
    ],
  },
  '2': {
    imageSrc: darsanaCommunityEventProgram.src,
    imageAlt: 'Event Image 2',
    date: 'August 10, 2024',
    time: '6:00 PM',
    title: 'Darsana - Community Engagement',
    description: `Darsana's support to Mysore Mine School and KS Vasan memorial school is continuing ...

We provided green boards to all class rooms, toys for children in small classes and outdoor play equipments to all senior classes. Happy to see the library becoming functional utilizing the books contributed by Darsana Members.

Another highlight is Darsana sponsored all the prizes for the sports day this year. The commitment of Bangalore chapter is what is driving this whole programme.

As our continued commitment to the students of school, Darsana has started sponsoring eggs to students. Funding for this inititaive is coming from the US Chapter`,
        reviews: [
      {
        profileImage: Profile.src,
        reviewText: 'Fantastic experience!',
        reviewerName: 'Liam Johnson',
        category: 'Speaker',
      },
      {
        profileImage: Profile.src,
        reviewText: 'The session was very insightful.',
        reviewerName: 'Olivia Williams',
        category: 'Attendee',
      },
      {
        profileImage: Profile.src,
        reviewText: 'Great networking opportunities.',
        reviewerName: 'Noah Davis',
        category: 'Sponsor',
      },
    ],
  },
  '3': {
    imageSrc: DarsanaHouseImage.src,
    imageAlt: 'Event Image 1',
    date: '01 February, 2024',
    time: '4:00 PM',
    title: 'House No 10 by Darsana',
    description: `The 10th house build by Darsana is Handed over at Palakkad.
This milestone was made possible by the massive efforts of our Palakkad chapter and the house construction committee .
We started this journey after the devastating floods of 2018, when within a period of few months, we collected 25 Lakhs from our members, built and handed over 5 houses on our own. Ever since, we have received requests from other organisations, that can raise funds but cannot reliably execute such projects. Darsana has been able to contribute in an exemplary manner, in validating the veracity of the beneficiary, getting the papers ready from the local body and constructing a home built to the desires of the beneficiary at high quality. We have executed these projects in multiple locations in our state.
This is the second house we are constructing from the funds raised by Women's Wing of Kerala Cultural Society, USA - A testament to the trust we built with them. Our USA chapter deserves full appreciation for this.

Probably, this is a first by an Alumni organisation in Kerala. We can make many more unique contributions with this fraternity that we are all proud to be part of called Darsana.
Let us join together and make the change toward an equitable Kerala`,
    reviews: [
      {
        profileImage: Profile.src,
        reviewText: 'Incredible initiative! Well done, Bangalore chapter!',
        reviewerName: 'Sophia Anderson',
        category: 'Member Communication Officer',
      },
      {
        profileImage: Profile.src,
        reviewText: 'Heartwarming event, inspiring work by Darsana.',
        reviewerName: 'Sophia Anderson',
        category: 'Member Communication Officer',
      },
      {
        profileImage: Profile.src,
        reviewText: 'Wonderful collaboration, US Chapter!',
        reviewerName: 'Stephen Brakke',
        category: 'Logistics Integration Producer',
      },
    ],
  },
  '4': {
    imageSrc: KolarGoldFieldprogram.src,
    imageAlt: 'Event Image 1',
    date: '26th February, 2024',
    time: ' 4:00 PM',
    title: 'Kolar Gold Fields (KGF)',
    description: `On behalf of the Bangalore chapter, happy to share that the first milestone of our support program to Mysore Mines School, Kolar Gold Fields (KGF) was achieved on 17 Dec 2022. The school is organising a function to formally inaugurate the library and sports facilities we have set up for them. The function is expected to be attended by the local residents, old students of the school, and representatives from Darsana and their family members. As a run-up to the program for the day, a few sports and games competition has been conducted and the winners will be given prizes by us. The school has benevolently declared more than 100 winners and hence we will be giving a small prize to all of these students.
In the last few months, with the active support of all of you, we have been able to do the following
1) Help set up a well-equipped library
2) Provide equipment for various sports and games activities
3) Replace the dilapidated writing boards in all classrooms
4) appoint two additional teachers from our funds
5) Boost the morale of the management team through multiple visits.
We plan to do the following as the next steps
1) Actively scouting for CSR partners to fund various development activities at the school
2) Improve nutrition in the meals of the students.
#team #share #darsana.`,
        reviews: [
        {
            profileImage: Profile.src,
            reviewText: 'Incredible initiative! Well done, Bangalore chapter!',
            reviewerName: 'Sophia Anderson',
            category: 'Member Communication Officer',
          },
          {
            profileImage: Profile.src,
            reviewText: 'Heartwarming event,Inspiring work by Darsana.',
            reviewerName: 'Sophia Anderson',
            category: 'Member Communication Officer',
          },
          {
            profileImage: Profile.src,
            reviewText: 'Wonderful collaboration, US Chapter!',
            reviewerName: 'Stephen Brakke',
            category: 'Logistics Integration Producer',
          },
    ],
  },
  // Add more dummy data as needed
};

const EventPage: React.FC = () => {
  const { id } = useParams(); // Get the event ID from the URL

  // Ensure id is defined and of type string
  const eventId = id as keyof EventsData;

  // Get the event data based on the ID
  const eventData = eventsData[eventId] || {
    imageSrc: '',
    imageAlt: 'Event Image',
    date: 'N/A',
    time: 'N/A',
    title: 'Event Title',
    description: 'No description available.',
    reviews: [], // Default to empty array if no reviews
  };

  return (
    <div className="container mx-auto max-w-screen-xl p-6">
      {/* Event Section */}
      <section className="event-section mb-10">
        <h1 className="text-3xl font-bold mb-6 text-center">{eventData.title}</h1>
        <div className="mb-6">
          <ImageComponent 
            src={eventData.imageSrc} 
            alt={eventData.imageAlt} 
            
          />
        </div>
        <EventDetails
          date={eventData.date}
          time={eventData.time}
           title={eventData.title}
          description={eventData.description}
          
        />
      </section>

      {/* Reviews Section */}
      <section className="reviews-section mb-10">
        <h2 className="text-2xl font-bold text-left mb-6">Stories of Change</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventData.reviews.length > 0 ? (
            eventData.reviews.map((review, index) => (
              <ReviewCard
                key={index}
                profileImage={review.profileImage}
                reviewText={review.reviewText}
                reviewerName={review.reviewerName}
                category={review.category}
              />
            ))
          ) : (
            <div className="text-center text-gray-600">No reviews available.</div>
          )}
        </div>
      </section>

      {/* Fixed Icons */}
      <FixedIcons className="text-xl" /> {/* Adjust icon size */}
    </div>
  );
};

export default EventPage;
