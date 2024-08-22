import React from 'react';
import Image from 'next/image';
import sholayurEducationalImage from 'src/assets/initiatives/Sholayur_Educational.png'; // Update the path as needed

const SholayurEducationalSupportPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-black">
          Sholayur Educational Support Program
        </h1>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src={sholayurEducationalImage.src}
          alt="Educational support program at Sholayur tribal higher secondary school, Attappady"
          width={600} // Adjusted width
          height={400} // Adjusted height
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
        <p className="mb-4">
          Darsana intervenes to provide constructive and qualitative educational
          support programs that address the issues of backwardness in the area
          of education in Kerala, particularly in the tribal regions of the
          state due to socio-economic reasons. To this end, Darsana began
          studying and understanding the problem of learning difficulties among
          students in the tribal regions in the state. We started with a tribal
          school in Attappady; The Govt. tribal higher secondary school,
          Sholayur. Through various interactions with teachers, students, and
          the local community, Darsana formulated actionable plans for
          educational interventions in 2019, partnering with other educational
          experts to ensure the quality of the interventions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Key Objectives
        </h2>
        <ul className="list-disc ml-8 mb-4">
          <li>
            Identify specific programs that address the learning problems of
            tribal students caused by language conflicts.
          </li>
          <li>
            Support the school with materials and training to implement the
            identified programs.
          </li>
          <li>
            Plan or join various programs for supporting the students from
            tribal communities to reach the mainstream with pride and dignity,
            without leaving their language and culture, but by protecting and
            enriching those values.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Program Initiatives
        </h2>
        <p className="mb-4">
          The first issue we addressed was the medium of instruction in the
          classrooms of standards I to VII. The textbooks, teaching, and
          examinations are in Malayalam, which is not the student&apos;s mother
          tongue, Irula, a scriptless language. Children often face difficulty
          in understanding concepts and achieving their learning outcomes. To
          support the students to overcome this obstacle in learning, it was
          necessary to transform the learning environment into something more
          motivating and encouraging. This program included adding accessible
          reading materials, digital reading materials and activities, and other
          learning aids for the students, as well as multiple workshops for the
          teachers to integrate these materials into their teaching process.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Program Implementation
        </h2>
        <ul className="list-disc ml-8 mb-4">
          <li>
            Darsana installed classroom libraries in all primary-level
            classrooms with carefully selected reading materials in Malayalam
            and English.
          </li>
          <li>
            Darsana conducted multiple training workshops for teachers and
            students to design integrated learning activities to boost
            confidence and overcome the language barrier.
          </li>
          <li>
            Darsana also delivered multifunctional cubes for various activities
            of students from classes I to VII. A full-day workshop was also
            conducted to demonstrate various possibilities with the cubes, such
            as fun games, math activities, seating, and performance activities.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SholayurEducationalSupportPage;
