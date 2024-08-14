import React from 'react';
import skillDevelopmentProgram from 'src/assets/initiatives/skill_development_program.png';

const SkillDevelopmentProgram: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Skill Development Program
      </h1>

      <div className="flex justify-center mb-8 bg-gray-200 p-8 rounded-lg shadow-md">
        <img
          src={skillDevelopmentProgram.src}
          alt="Skill Development Program"
          className="w-full max-w-3xl rounded-lg"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-gray-700 leading-relaxed">
        <p className="mb-4">
          As part of the initiatives to help students build rewarding careers, we decided to conduct a program for 45 deserving students to give them the skills they need and boost their self-confidence to face interviews. In 2008, we jointly launched this program with the college's placement cell, and the students responded positively. The skill development program has grown significantly over time.
        </p>

        <div className="flex flex-col space-y-4">
          <p>
            The program includes:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li>Communication Skills</li>
            <li>Technical Workshops</li>
            <li>Mock Interviews</li>
            <li>Resume Building Sessions</li>
          </ul>

          <p>
            Every year, we adapt the program based on the feedback from previous batches to ensure it meets the current industry standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillDevelopmentProgram;
