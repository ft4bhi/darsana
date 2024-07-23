"use client"
import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import "./globals.css";
import about_us_heroImage from '../../../assets/aboutus/about_us_heroimage.png';
// import storyImage from '../../../assets/aboutus/story_image.png';
// import howWeDoImage from '../../../assets/aboutus/howwedo_image.png';
// import objectivesImage from '../../../assets/aboutus/objectives_image.png';
// import globalInnovationsImage from '../../../assets/aboutus/global_innovations_image.png';
// import chaptersImage from '../../../assets/aboutus/chapters_image.png';
// import leadershipImage from '../../../assets/aboutus/leadership_image.png';
// import timelineImage from '../../../assets/aboutus/timeline_image.png';

const AboutUs: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('Our Story');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Our Story':
        return (
          <div className="nameCard">
            <div className="imageWrapper">
              <Image src={about_us_heroImage} alt="Our Story Image" layout="intrinsic" width={150} height={150} />
            </div>
            <div className="textWrapper">
              <p>
                Darsana was established in 2007 as a charitable society with a registered office in Palakkad, Kerala. The idea for such an organization arose during a meeting of a few progressive-thinking students from the 1991 graduating class of NSS College of Engineering, Palakkad (NSSCE). The meeting was called to consider establishing an endowment for NSS College of Engineering Palakkad students in honor of their batchmate, the late Comrade Biju Cheriyan. This sparked the idea of bringing together all like-minded students from the 1960s to the millennium batches. Darsana was inaugurated on August 5, 2007, by the then honorable Education Minister of Kerala M. A. Baby in a function organized at the NSSCE campus. It was presided over by the college principal. The then member of parliament for Palakkad constituency, N. N. Krishnadas also attended.
              </p>
            </div>
          </div>
        );
      case 'How We Do':
        return (
          <div className="nameCard">
            <div className="imageWrapper">
              <Image src={about_us_heroImage} alt="How We Do Image" layout="intrinsic" width={150} height={150} />
            </div>
            <div className="textWrapper">
              <p>We have undertaken many socially relevant initiatives in education, waste management, sustainable construction methods, e-governance at panchayat level and many more in addition to various charity initiatives like sponsoring economically weak students etc. We are the organisers of Biju Cherian Scholarship which finacially supports more than 40 engineering students with an annual budget outlay of Rs 5 lakhs.
                We are the proud organizers of IGNITE, the biggest innovatiion contest held for college students in Kerala. We are also very active in designing and constructing alternate and sustainable houses. Darsana so far built 10 houses for the needy.</p>
            </div>
          </div>
        );
      case 'Objectives':
        return (
          <div className="nameCard">
            <div className="imageWrapper">
              <Image src={about_us_heroImage} alt="Objectives Image" layout="intrinsic" width={150} height={150} />
            </div>
            <div className="textWrapper">
              <p>Under the banner of Darsana we have undertaken many socially relevant initiatives in education, waste management, sustainable construction methods,</p>
            </div>
          </div>
        );
      case 'Global Innovations':
        return (
          <div className="nameCard">
            <div className="imageWrapper">
              <Image src={about_us_heroImage} alt="Global Innovations Image" layout="intrinsic" width={150} height={150} />
            </div>
            <div className="textWrapper">
              <p>Darsana is a professionally managed organization led by a 21-member Executive Committee. The committee members are from all over the globe. The Committee meets every two weeks via digital platforms to plan upcoming activities. We take pride in being among the first organizations to use digital platforms to run an organization effectively and efficiently.</p>
            </div>
          </div>
        );
      case 'Chapters':
        return (
          <div className="nameCard">
            <div className="imageWrapper">
              <Image src={about_us_heroImage} alt="Chapters Image" layout="intrinsic" width={150} height={150} />
            </div>
            <div className="textWrapper">
              <p>As its members were widely dispersed across the globe, Darsana recognized early on that true growth could only be achieved through a strong network of independent chapters in various parts of the globe. Darsana's strength lies in its chapters. The programs initiated and carried out by different chapters have produced commendable results. Through chapters, Darsana's dream of becoming an umbrella organization for over 3000 former NSSCE students from the early 1960s to the present is being realized.

              </p>
            </div>
          </div>
        );
      case 'Primary Leadership':
        return (
          <div className="nameCard">
            <div className="imageWrapper">
              <Image src={about_us_heroImage} alt="Primary Leadership Image" layout="intrinsic" width={150} height={150} />
            </div>
            <div className="textWrapper">
              <p>.</p>
            </div>
          </div>
        );
      case 'Timeline':
        return (
          <div className="nameCard">
            <div className="imageWrapper">
              <Image src={about_us_heroImage} alt="Timeline Image" layout="intrinsic" width={150} height={150} />
            </div>
            <div className="textWrapper">
              <p>Content for Timeline.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <header className="header">
          <h1>About Us</h1>
          <p>
            We are a global diaspora of more than a thousand highly experienced
            and socially committed engineers. We work towards making a
            difference in the life of the needy and down-trodden.
          </p>
        </header>
        <div className="imageContainer">
          <Image src={about_us_heroImage} alt="about_us_heroimage" layout="responsive" />
        </div>
        <nav className="navigation">
          <button onClick={() => setSelectedSection('Our Story')}>Our Story</button>
          <button onClick={() => setSelectedSection('How We Do')}>How We Do</button>
          <button onClick={() => setSelectedSection('Objectives')}>Objectives</button>
          <button onClick={() => setSelectedSection('Global Innovations')}>Global Innovations</button>
          <button onClick={() => setSelectedSection('Chapters')}>Chapters</button>
          <button onClick={() => setSelectedSection('Primary Leadership')}>Primary Leadership</button>
          <button onClick={() => setSelectedSection('Timeline')}>Timeline</button>
        </nav>
        <section className="details">
          {renderContent()}
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
