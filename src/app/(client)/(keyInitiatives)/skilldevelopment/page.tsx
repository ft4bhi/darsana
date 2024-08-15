import React from 'react';
import Image from 'next/image';
import skillDevelopmentProgram from 'src/assets/initiatives/skill_development_program.png';

const SkillDevelopmentProgram: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-black">
          Skill Development Program
        </h1>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src={skillDevelopmentProgram.src}
          alt="Skill Development Program"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
        <p className="mb-4">
          As part of the initiatives to help students build rewarding careers, we decided to conduct a program for 45 deserving students to give them the skills they need and boost their self-confidence to face interviews. In 2008, we jointly launched this program with the college's placement cell, and the students responded positively. The skill development program has grown significantly over time.
        </p>

        <div className="mb-4">
          <p className="font-semibold">The program includes:</p>
          <ul className="list-disc ml-8 mt-2">
            <li>Communication Skills</li>
            <li>Technical Workshops</li>
            <li>Mock Interviews</li>
            <li>Resume Building Sessions</li>
          </ul>
        </div>

        <p>
          Every year, we adapt the program based on the feedback from previous batches to ensure it meets the current industry standards.
        </p>
      </div>
    </div>
  );
};

export default SkillDevelopmentProgram;
