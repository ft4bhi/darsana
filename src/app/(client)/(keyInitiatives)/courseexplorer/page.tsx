import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Course Explorer</h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <Image src="/darsana_logo.png" alt="Darsana Logo" width={150} height={50} />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Image src="src\assets\initiatives\course_explorer.png" alt="Course Explorer 2021" width={600} height={400} />
      </div>

      <p>
        The Darsana Calicut chapter organized an online awareness programme for students in the 11th and 12th grades
        who aspire to join engineering degree courses. The three-day programme titled ‘Course Explorer 2021’ was
        conducted from August 27, 2021, to August 29, 2021.
      </p>

      <p>
        Academicians from reputed institutes handled the sessions about the undergraduate programmes for various branches
        of engineering. Each hour-long session included a presentation by the expert followed by a question-answer session.
      </p>

      <p>
        The sessions on the first day were handled by Dr. K. V. Gangadharan (Mechanical Engineering Department, NIT
        Surathkal), and Dr. E. R. Ushakumary (Chemical Engineering Department, GEC Kozhikode). Dr. Indu P. Nair
        (Electrical Engineering Department, COE Kidangoor) and Dr. Madhu Mohan (Electronics Engineering Department,
        Amrita School of Engineering) handled the sessions on the second day. The third day had four sessions conducted
        by Dr. K. A. Abdul Nazeer (Computer Science Department, NIT Calicut), Dr. Shyni Anilkumar (Department of
        Architecture, NIT Calicut), Dr. George K. Varghese (Civil Engineering Department, NIT Calicut), and Dr. K. B.
        Radhakrishnan (Biotechnology Department, SCT CET, Trivandrum). The event attracted students from both Kerala and
        outside.
      </p>

      <p>
        Around 325 students attended sessions on courses that were in great demand. Overall, it was a very valuable
        programme that helped students gather information about the curriculum, specific requirements, and opportunities
        of each course.
      </p>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p>Zoom Meeting ID: 81768787671</p>
        <p>
          Join at: <a href="https://tinyurl.com/4jb45xv6">https://tinyurl.com/4jb45xv6</a>
        </p>
      </div>
    </div>
  );
};

export default Page;
