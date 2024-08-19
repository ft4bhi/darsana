import React from 'react';
import Image from 'next/image';
import courseExplorer from "@/assets/initiatives/course_explorer.png";

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-black">
          Course Explorer
        </h1>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src={courseExplorer.src}
          alt="Course Explorer 2021"
          width={600} 
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
        <p className="mb-4">
          The Darsana Calicut chapter organized an online awareness programme for students in the 11th and 12th grades
          who aspire to join engineering degree courses. The three-day programme titled ‘Course Explorer 2021’ was
          conducted from August 27, 2021, to August 29, 2021.
        </p>

        <p className="mb-4">
          Academicians from reputed institutes handled the sessions about the undergraduate programmes for various branches
          of engineering. Each hour-long session included a presentation by the expert followed by a question-answer session.
        </p>

        <p className="mb-4">
          The sessions on the first day were handled by Dr. K. V. Gangadharan (Mechanical Engineering Department, NIT
          Surathkal), and Dr. E. R. Ushakumary (Chemical Engineering Department, GEC Kozhikode). Dr. Indu P. Nair
          (Electrical Engineering Department, COE Kidangoor) and Dr. Madhu Mohan (Electronics Engineering Department,
          Amrita School of Engineering) handled the sessions on the second day. The third day had four sessions conducted
          by Dr. K. A. Abdul Nazeer (Computer Science Department, NIT Calicut), Dr. Shyni Anilkumar (Department of
          Architecture, NIT Calicut), Dr. George K. Varghese (Civil Engineering Department, NIT Calicut), and Dr. K. B.
          Radhakrishnan (Biotechnology Department, SCT CET, Trivandrum). The event attracted students from both Kerala and
          outside.
        </p>

        <p className="mb-4">
          Around 325 students attended sessions on courses that were in great demand. Overall, it was a very valuable
          programme that helped students gather information about the curriculum, specific requirements, and opportunities
          of each course.
        </p>

        
      </div>
    </div>
  );
};

export default Page;
