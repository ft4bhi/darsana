import React from 'react';
import Image from 'next/image';

const SholayurEducationalSupportPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sholayur Educational Support Program</h1>
      
      <div style={styles.imageContainer}>
        <Image 
          src="src\assets\initiatives\Sholayur_Educational.png" 
          alt="Educational support program at Sholayur tribal higher secondary school, Attappady"
          layout="responsive"
          width={700}
          height={475}
        />
      </div>

      <div style={styles.content}>
        <p>
          Darsana intervenes to provide constructive and qualitative educational support programs that address the issues of backwardness in the area of education in Kerala, particularly in the tribal regions of the state due to socio-economic reasons. 
          To this end, Darsana began studying and understanding the problem of learning difficulties among students in the tribal regions in the state. We started with a tribal school in Attappady; The Govt. tribal higher secondary school, Sholayur. 
          Through various interactions with teachers, students, and the local community, Darsana formulated actionable plans for educational interventions in 2019, partnering with other educational experts to ensure the quality of the interventions.
        </p>

        <h2 style={styles.subtitle}>Key Objectives</h2>
        <ul>
          <li>Identify specific programs that address the learning problems of tribal students caused by language conflicts.</li>
          <li>Support the school with materials and training to implement the identified programs.</li>
          <li>
            Plan or join various programs for supporting the students from tribal communities to reach the mainstream with pride and dignity, without leaving their language and culture, but by protecting and enriching those values.
          </li>
        </ul>

        <h2 style={styles.subtitle}>Program Initiatives</h2>
        <p>
          The first issue we addressed was the medium of instruction in the classrooms of standards I to VII. The textbooks, teaching, and examinations are in Malayalam, which is not the student's mother tongue, Irula, a scriptless language. 
          Children often face difficulty in understanding concepts and achieving their learning outcomes. To support the students to overcome this obstacle in learning, it was necessary to transform the learning environment into something more motivating and encouraging.
          This program included adding accessible reading materials, digital reading materials and activities, and other learning aids for the students, as well as multiple workshops for the teachers to integrate these materials into their teaching process.
        </p>

        <h2 style={styles.subtitle}>Program Implementation</h2>
        <ul>
          <li>Darsana installed classroom libraries in all primary-level classrooms with carefully selected reading materials in Malayalam and English.</li>
          <li>Darsana conducted multiple training workshops for teachers and students to design integrated learning activities to boost confidence and overcome the language barrier.</li>
          <li>Darsana also delivered multifunctional cubes for various activities of students from classes I to VII. A full-day workshop was also conducted to demonstrate various possibilities with the cubes, such as fun games, math activities, seating, and performance activities.</li>
        </ul>
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
  subtitle: {
    marginTop: '20px',
    color: '#333',
  }
};

export default SholayurEducationalSupportPage;
