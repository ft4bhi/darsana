import React from 'react';
import Image from 'next/image';
import Biju_Cherian_Endowment from '@/assets/initiatives/Biju_Cherian_Endowment.png';

const AwardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-center text-black mb-8">
        Prabakaran Memorial Best Project Award
      </h1>
      <div className="flex justify-center mb-8">
        <Image
          src={Biju_Cherian_Endowment.src}
          alt="Award Presentation"
          width={700} // Adjusted width for centering
          height={400} // Adjusted height for proper aspect ratio
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed w-full max-w-4xl">
        <p className="mb-4">
          The annual general body of Darsana held in 2010, in line with its
          ideological commitment to promote &quot;Technology for the betterment
          of society&quot;, decided to establish an award for the most socially
          relevant project from the final year projects of NSSCE students.
        </p>
        <p className="mb-4">
          The award was established in honor of Sri Prabhakaran, one of our
          deceased members. The Prabhakaran Award comprises of cash prize and a
          Certificate. The annual award money is accrued as interest on a fixed
          deposit made just for this use.
        </p>
        <p className="mb-4">
          Darsana will also extend support to the winners in any of the
          following:
        </p>
        <ol className="list-decimal ml-8 mb-4">
          <li>Publishing their idea as a research paper</li>
          <li>Patenting the idea</li>
          <li>
            Setting a startup to develop the idea into a commercial venture
          </li>
          <li>
            All the entries to Prabhakaran Award will also get direct entry to
            the prestigious &quot;IGNITE&quot; innovation contest.
          </li>
        </ol>
        <p className="mb-4">
          There were 41 projects which were registered for the Prabhakaran Award
          2024. Interim Review of these projects were done on 12th, 13th, 14th,
          and 19th February evenings. 26 groups presented their projects.
        </p>
        <p className="mb-4">
          The presentation included about 5 powerpoint slides, a high-level
          summary of the project and the current progress. These were reviewed
          by 9 judges. All from UAE members. The judges provided their feedback
          and sometimes discussed with the students about the prospects and
          scopes for improvements. Coordinator Dr. Sajeesh provided all required
          coordinations with the student teams.
        </p>
        <p className="mb-4">
          A Jotform was shared to the judges. Judges marked their marks
          instantly in the online form upon completion of the presentations.
          This process took about a minute only. Committee plans to implement
          the same during the final evaluation. This will help to announce the
          winner faster.
        </p>
        <p>
          The final review is expected in May-June depending on the Final Year
          exam. Committee is coordinating with Dr. Sajeesh for the same.
        </p>
      </div>
    </div>
  );
};

export default AwardPage;
