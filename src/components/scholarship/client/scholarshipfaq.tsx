// components/FaqBox.tsx
'use client'

import { useState } from 'react';

interface FaqBoxProps {
  question: string;
  answer: string;
}

const FaqBox: React.FC<FaqBoxProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full relative flex flex-col items-start justify-start gap-[0.812rem] text-left text-[0.938rem] text-gray font-roboto">
      <div className="self-stretch relative bg-white overflow-hidden shrink-0 cursor-pointer" onClick={toggleFaq}>
        <div className={`border-darkslategray border-[1px] border-solid box-border w-[48.438rem] ${isOpen ? 'h-auto' : 'h-[4.063rem]'}`}>
          <div className="relative">
            <div className="absolute top-[1.313rem] left-[2.5rem] leading-[150%] font-medium inline-block w-[21.719rem]">
              {question}
            </div>
            <img className="absolute top-[2.519rem] left-[44.375rem] w-[1.563rem] h-[0.894rem]" alt="" src="Vector.svg" />
          </div>
          {isOpen && (
            <div className="px-10 py-5">
              {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqBox;
