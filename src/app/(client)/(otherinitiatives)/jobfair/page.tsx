import React from 'react';
import Image from 'next/image';

const JobFairPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Job Fair</h1>
      
      <div style={styles.imageContainer}>
        <Image 
          src="/path-to-your-job-fair-imasrc\assets\initiatives\Job_Fair.png" 
          alt="Job Fair organized by Darsana"
          layout="responsive"
          width={700}
          height={475}
        />
      </div>

      <div style={styles.content}>
        <p>
          Darsana conducted a massive job fair on 1st & 2nd August 2008 at Govt. Victoria College. By far, it is the largest event organized by Darsana. The job fair helped Darsana become a popular name in and around Palakkad.
        </p>
        <p>
          Darsana was a partner for the Deshabhimani Job fair held at Kozhikode from 17th to 20th October 2013. Darsana members played a key role in the conducting of the job fair.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center' as const,
    marginBottom: '20px',
    color: '#333',
  },
  imageContainer: {
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  content: {
    color: '#555',
    lineHeight: '1.6',
  },
};

export default JobFairPage;
