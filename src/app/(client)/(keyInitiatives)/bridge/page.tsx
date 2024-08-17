import React from 'react';
import Image from 'next/image';
import bridge from "@/assets/initiatives/bridge.png";

const BridgePage: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.8',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          textAlign: 'center', // Center-align the heading
          marginBottom: '40px',
          fontSize: '2.5rem',
          color: '#000', // Set the heading color to black
          fontWeight: 'bold',
        }}
      >
        Bridge
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <Image
          src={bridge.src}
          alt="Bridge Program"
          width={600}
          height={400}
          style={{
            borderRadius: '10px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
          }}
        />
      </div>

      <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'left' }}>
        Bridge is a program designed to offer academic support to students from socially underprivileged groups in society. 
        A large number of such students in professional colleges either drop out or fail to meet the requirements of successful 
        completion of the courses. For example, the pass percentage of SC/ST students in engineering is less than 10%. While the 
        main reason is the lack of an academic foundation, sometimes the inability to adjust culturally to the college environment 
        also contributes. It has been decided to start a pilot program for the Bridge at NSS College of Engineering, Palakkad.
      </p>

      <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'left' }}>
        Based on the feedback from the college, the scope of the program was widened to include financially weaker students along 
        with students from socially underprivileged groups. Selection of the students was based on their family income, rank in 
        entrance examinations, social category, etc. In addition to academic support, the program also included training on social 
        and cultural adjustments, communication, and other soft skills.
      </p>

      <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'left' }}>
        The initial plan was to start the programs for 2021-22 admissions in the college. However, based on the request from the 
        college, the first Bridge program started with third-semester students entering the campus for the first time after the 
        pandemic. Forty students were shortlisted for the program from a list of 500.
      </p>

      <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'left' }}>
        The program was inaugurated by Principal Dr P. R. Suresh on December 18, 2021. The nodal officer from the college Dr. 
        Harikrishnan and a few members from Darsana also were present. The program started with Mathematics and English/Personality 
        development classes.
      </p>

      <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'left' }}>
        Subsequently, another batch for fresh 2021 admissions also was started. Forty first-year students shortlisted from 100 
        applications are participating in it.
      </p>

      <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'left' }}>
        The bridge committee includes people from Kochi, Thiruvananthapuram, Bangalore, and Palakkad chapters to ensure close 
        contact with all participating students.
      </p>

      <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'left' }}>
        A group of resource persons has been identified to run the sessions. Sessions are monitored and managed using an app.
      </p>
    </div>
  );
};

export default BridgePage;
