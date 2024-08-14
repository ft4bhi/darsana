import React from 'react';

const AwardPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Prabakaran Memorial Best Project Award</h1>
      <div style={styles.imageContainer}>
        <img
          src="src\assets\initiatives\Biju_Cherian_Endowment.png"
          alt="Award Presentation"
          style={styles.image}
        />
      </div>
      <div style={styles.content}>
        <p>
          The annual general body of Darsana held in 2010, in line with its ideological commitment to promote
          "Technology for the betterment of society", decided to establish an award for the most socially relevant
          project from the final year projects of NSSCE students.
        </p>
        <p>
          The award was established in honor of Sri Prabhakaran, one of our deceased members. The Prabhakaran Award
          comprises of cash prize and a Certificate. The annual award money is accrued as interest on a fixed deposit
          made just for this use.
        </p>
        <p>Darsana will also extend support to the winners in any of the following:</p>
        <ol>
          <li>Publishing their idea as a research paper</li>
          <li>Patenting the idea</li>
          <li>Setting a startup to develop the idea into a commercial venture</li>
          <li>
            All the entries to Prabhakaran Award will also get direct entry to the prestigious "IGNITE" innovation
            contest.
          </li>
        </ol>
        <p>
          There were 41 projects which were registered for the Prabhakaran Award 2024. Interim Review of these projects
          were done on 12th, 13th, 14th, and 19th February evenings. 26 groups presented their projects.
        </p>
        <p>
          The presentation included about 5 powerpoint slides, a high-level summary of the project and the current
          progress. These were reviewed by 9 judges. All from UAE members. The judges provided their feedback and
          sometimes discussed with the students about the prospects and scopes for improvements. Coordinator Dr. Sajeesh
          provided all required coordinations with the student teams.
        </p>
        <p>
          A Jotform was shared to the judges. Judges marked their marks instantly in the online form upon completion of
          the presentations. This process took about a minute only. Committee plans to implement the same during the
          final evaluation. This will help to announce the winner faster.
        </p>
        <p>
          The final review is expected in May-June depending on the Final Year exam. Committee is coordinating with Dr.
          Sajeesh for the same.
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

export default AwardPage;