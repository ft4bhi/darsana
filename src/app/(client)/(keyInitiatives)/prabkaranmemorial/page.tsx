import React from 'react';
import prabakaranMemorialAward from 'src/assets/initiatives/prabakaran_memorial_award.png';

const PrabakaranMemorialAwardPage: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Prabakaran Memorial Best Project Award
                </h1>
            </div>

            <div className="flex justify-center my-8">
                <img
                    src={prabakaranMemorialAward.src}
                    alt="Prabakaran Memorial Best Project Award Ceremony"
                    className="w-full max-w-4xl rounded-lg shadow-lg"
                />
            </div>

            <div className="text-gray-700 leading-loose">
                <p className="mb-4">
                    The annual general body of Darsana held in 2010, in line with its ideological commitment to promote "Technology for the betterment of society", decided to establish an award for the most socially relevant project from the final year projects of NSSCE students.
                </p>
                <p className="mb-4">
                    The award was established in honor of Sri Prabhakaran, one of our deceased members. The Prabhakaran Award comprises of a cash prize and a Certificate. The annual award money is accrued as interest on a fixed deposit made just for this use.
                </p>
                <p className="mb-4">
                    Darsana will also extend support to the winners in any of the following:
                </p>
                <ul className="list-disc ml-8 mb-4">
                    <li>Publishing their idea as a research paper</li>
                    <li>Patenting the idea</li>
                    <li>Setting a startup to develop the idea into a commercial venture</li>
                    <li>All the entries to Prabhakaran Award will also get direct entry to the prestigious "IGNITE" innovation contest.</li>
                </ul>
                <p className="mb-4">
                    There were 41 projects which were registered for the Prabhakaran Award 2024.
                </p>
                <p className="mb-4">
                    Interim Review of these projects were done on 12th, 13th, 14th, and 19th February evenings. 26 groups presented their projects.
                </p>
                <p className="mb-4">
                    The presentation included about 5 PowerPoint slides, a high-level summary of the project, and the current progress. These were reviewed by 9 judges, all from UAE members. The judges provided their feedback and sometimes discussed with the students about the prospects and scopes for improvements. Coordinator Dr. Sajeesh provided all required coordination with the student teams.
                </p>
                <p className="mb-4">
                    A Jotform was shared with the judges. Judges marked their scores instantly in the online form upon completion of the presentations. This process took about a minute only. The committee plans to implement the same during the final evaluation. This will help announce the winner faster.
                </p>
                <p className="mb-4">
                    The final review is expected in May-June depending on the Final Year exam. The committee is coordinating with Dr. Sajeesh for the same.
                </p>
            </div>
        </div>
    );
};

export default PrabakaranMemorialAwardPage;
