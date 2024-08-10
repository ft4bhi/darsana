



"use client"
import { useState } from 'react';

import Image, { ImageProps } from 'next/image';
import Head from 'next/head';
import about_us_heroImage from '../../../assets/aboutus/about_us_heroimage.png';

const AboutUs: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('Our Story');

  const renderContent = () => {
    const commonClasses = "w-full max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg";
    const imageClasses = "w-full md:w-1/3 mb-6 md:mb-0";
    const contentClasses = "w-full md:w-2/3 md:pl-8";

    const renderSection = (title: string, content: string, imageSrc: ImageProps['src']) => (
      <div className={commonClasses}>
        <h2 className="text-3xl font-bold mb-6 text-blue-600">{title}</h2>
        <div className="flex flex-col md:flex-row items-start">
          <div className={imageClasses}>
            <Image src={imageSrc} alt={`${title} Image`} width={400} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div className={contentClasses}>
            <p className="text-lg leading-relaxed text-gray-700">{content}</p>
          </div>
        </div>
      </div>
    );
    switch (selectedSection) {
      case 'Our Story':
        return renderSection(
          "Our Story",
          "Darsana was established in 2007 as a charitable society with a registered office in Palakkad, Kerala. The idea for such an organization arose during a meeting of a few progressive-thinking students from the 1991 graduating class of NSS College of Engineering, Palakkad (NSSCE). The meeting was called to consider establishing an endowment for NSS College of Engineering Palakkad students in honor of their batchmate, the late Comrade Biju Cheriyan. This sparked the idea of bringing together all like-minded students from the 1960s to the millennium batches. Darsana was inaugurated on August 5, 2007, by the then honorable Education Minister of Kerala M. A. Baby in a function organized at the NSSCE campus. It was presided over by the college principal. The then member of parliament for Palakkad constituency, N. N. Krishnadas also attended.",
          about_us_heroImage
        );
      case 'How We Do':
        return renderSection(
          "How We Do",
          "We have undertaken many socially relevant initiatives in education, waste management, sustainable construction methods, e-governance at panchayat level and many more in addition to various charity initiatives like sponsoring economically weak students etc. We are the organisers of Biju Cherian Scholarship which finacially supports more than 40 engineering students with an annual budget outlay of Rs 5 lakhs. We are the proud organizers of IGNITE, the biggest innovatiion contest held for college students in Kerala. We are also very active in designing and constructing alternate and sustainable houses. Darsana so far built 10 houses for the needy.",
          about_us_heroImage
        );
      case 'Objectives':
        return renderSection(
          "Objectives",
          "Under the banner of Darsana we have undertaken many socially relevant initiatives in education, waste management, sustainable construction methods, and more. Our primary objective is to make a positive impact on society through our various programs and initiatives.",
          about_us_heroImage
        );
      case 'Global Innovations':
        return renderSection(
          "Global Innovations",
          "Darsana is a professionally managed organization led by a 21-member Executive Committee. The committee members are from all over the globe. The Committee meets every two weeks via digital platforms to plan upcoming activities. We take pride in being among the first organizations to use digital platforms to run an organization effectively and efficiently.",
          about_us_heroImage
        );
      case 'Chapters':
        return renderSection(
          "Chapters",
          "As its members were widely dispersed across the globe, Darsana recognized early on that true growth could only be achieved through a strong network of independent chapters in various parts of the globe. Darsana's strength lies in its chapters. The programs initiated and carried out by different chapters have produced commendable results. Through chapters, Darsana's dream of becoming an umbrella organization for over 3000 former NSSCE students from the early 1960s to the present is being realized.",
          about_us_heroImage
        );
      case 'Primary Leadership':
        return renderSection(
          "Primary Leadership",
          "Our primary leadership consists of dedicated individuals who bring a wealth of experience and expertise to guide Darsana's mission and vision. They work tirelessly to ensure that our organization continues to make a positive impact on society.",
          about_us_heroImage
        );
      case 'Timeline':
        return renderSection(
          "Timeline",
          "Darsana's journey is marked by significant milestones and achievements. Our timeline showcases the key events and accomplishments that have shaped our organization since its inception in 2007.",
          about_us_heroImage
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>About Us | Darsana</title>
        <meta name="description" content="Learn about Darsana's mission and impact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 text-center w-full rounded-b-lg shadow-md">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl mt-2 max-w-3xl mx-auto">
            We are a global diaspora of more than a thousand highly experienced
            and socially committed engineers. We work towards making a
            difference in the lives of the needy and down-trodden.
          </p>
        </header>
        <div className="my-8 w-full max-w-4xl">
          <Image src={about_us_heroImage} alt="about_us_heroimage" layout="responsive" className="rounded-lg shadow-xl" />
        </div>
        <nav className="flex flex-wrap justify-center my-8 gap-3">
          {['Our Story', 'How We Do', 'Objectives', 'Global Innovations', 'Chapters', 'Primary Leadership', 'Timeline'].map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${selectedSection === section
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                }`}
            >
              {section}
            </button>
          ))}
        </nav>
        <section className="my-8 max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          {renderContent()}
        </section>
      </main>
    </div>
  );
};

export default AboutUs;