import React from 'react';

const SkillDevelopmentProgram: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Skill Development Program</h1>
      <div style={styles.imageContainer}>
        <img
          src="src\assets\initiatives\skill_development_program.png"
          alt="Skill Development Program"
          style={styles.image}
        />
      </div>
      <div style={styles.content}>
        <p>
          As a part of the initiatives to help students to build rewarding careers, we decided to conduct a program for 45 deserving
          students to give them the skills they need and boost their self-confidence to face interviews. In 2008, we jointly launched this
          program with the college's placement cell, and the students responded positively. The skill development program has grown
          significantly over time.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '800px',
    backgroundColor: '#f4f4f4',
    color: '#333',
  },
  header: {
    textAlign: 'center' as 'center',
    color: '#333',
  },
  imageContainer: {
    textAlign: 'center' as 'center',
    margin: '20px 0',
    backgroundColor: '#e0e0e0',
    padding: '40px 0',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  content: {
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default SkillDevelopmentProgram;
