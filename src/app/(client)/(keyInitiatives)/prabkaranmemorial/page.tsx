import React from 'react';
import Image from 'next/image';
import prabakaranMemorialAward from 'src/assets/initiatives/prabakaran_memorial_award.png';

const PrabakaranMemorialAwardPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-black">
          Prabakaran Memorial Best Project Award
        </h1>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src={prabakaranMemorialAward}
          alt="Prabakaran Memorial Best Project Award Ceremony"
          width={700}
          height={400}
          className="rounded-lg shadow-lg max-w-3xl w-full"
        />
      </div>

      <div className="p-6 rounded-lg shadow-md text-gray-700 leading-relaxed max-w-4xl mx-auto">
        <p className="mb-4 text-left">
          The annual general body of Darsana held in 2010, in line with its
          ideological commitment to promote &quot;Technology for the betterment
          of society&quot;, decided to establish an award for the most socially
          relevant project from the final year projects of NSSCE students.
        </p>
        <p className="mb-4 text-left">
          The award was established in honor of Sri Prabhakaran, one of our
          deceased members. The Prabhakaran Award comprises a cash prize and a
          Certificate. The annual award money is accrued as interest on a fixed
          deposit made just for this use.
        </p>
        <p className="mb-4 text-left">
          Darsana will also extend support to the winners in any of the
          following:
        </p>
        <ul className="list-disc ml-8 mb-4 text-left">
          <li>Publishing their idea as a research paper</li>
          <li>Patenting the idea</li>
          <li>
            Setting up a startup to develop the idea into a commercial venture
          </li>
          <li>
            All the entries to Prabhakaran Award will also get direct entry to
            the prestigious &quot;IGNITE&quot; innovation contest.
          </li>
        </ul>
        <p className="mb-4 text-left">
          There were 41 projects registered for the Prabhakaran Award 2024.
        </p>
        <p className="mb-4 text-left">
          Interim reviews of these projects were done on 12th, 13th, 14th, and
          19th February evenings. 26 groups presented their projects.
        </p>
        <p className="mb-4 text-left">
          The presentation included about 5 PowerPoint slides, a high-level
          summary of the project, and the current progress. These were reviewed
          by 9 judges, all from UAE members. The judges provided their feedback
          and sometimes discussed with the students about the prospects and
          scopes for improvements. Coordinator Dr. Sajeesh provided all required
          coordination with the student teams.
        </p>
        <p className="mb-4 text-left">
          A Jotform was shared with the judges. Judges marked their scores
          instantly in the online form upon completion of the presentations.
          This process took about a minute only. The committee plans to
          implement the same during the final evaluation. This will help
          announce the winner faster.
        </p>
        <p className="text-left">
          The final review is expected in May-June depending on the Final Year
          exam. The committee is coordinating with Dr. Sajeesh for the same.
        </p>
      </div>
    </div>
  );
};

export default PrabakaranMemorialAwardPage;
