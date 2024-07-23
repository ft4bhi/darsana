import Image from 'next/image';
import Head from 'next/head';
import "./globals.css";
import heroImage from '../../../assets/aboutus/about_us_heroimage.png';

const AboutUs: React.FC = () => {
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
          <Image src={heroImage} alt="about_us_heroimage" layout="responsive" />
        </div>
        <nav className="navigation">
          <button>Our Story</button>
          <button>How We Do</button>
          <button>Objectives</button>
          <button>Global Innovations</button>
          <button>Chapters</button>
          <button>Primary Leadership</button>
          <button>Timeline</button>
        </nav>
        <section className="details">
          <div className="nameCard">
            <div className="imageWrapper">
              <Image src={heroImage} alt="about_us_heroimage" layout="intrinsic" width={750} height={650} />
            </div>
            <div className="textWrapper">
              <p>
                Darsana was established in 2007 as a charitable society with a registered office in Palakkad, Kerala. The idea for such an organization arose during a meeting of a few progressive-thinking students from the 1991 graduating class of NSS College of Engineering, Palakkad (NSSCE). The meeting was called to consider establishing an endowment for NSS College of Engineering Palakkad students in honor of their batchmate, the late Comrade Biju Cheriyan. This sparked the idea of bringing together all like-minded students from the 1960s to the millennium batches. Darsana was inaugurated on August 5, 2007, by the then honorable Education Minister of Kerala M. A. Baby in a function organized at the NSSCE campus. It was presided over by the college principal. The then member of parliament for Palakkad constituency, N. N. Krishnadas also attended.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
