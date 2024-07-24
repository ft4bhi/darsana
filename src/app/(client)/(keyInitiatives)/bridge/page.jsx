import Image from "next/image";

const BridgeKeyInviativites = () => {
  return (
    <div className="relative w-full bg-white text-center text-black font-roboto">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-8 leading-tight">Bridge</h1>
        <Image
          className="mx-auto mb-8 rounded-lg shadow-lg"
          src="/bridge key inviativites hero image.png"
          alt="Bridge Key Initiatives"
          width={967}
          height={611}
        />
        <div className="text-left text-lg font-arial space-y-6">
          <p>
            Bridge is a program designed to offer academic support to students
            from socially underprivileged groups in society. A large number of
            such students in professional colleges either drop out or fail to
            meet the requirements of successful completion of the courses. For
            example, the pass percentage of SC/ST students in engineering is
            less than 10%. While the main reason is the lack of an academic
            foundation, sometimes the inability to adjust culturally to the
            college environment also contributes.
          </p>
          <p>
            It has been decided to start a pilot program for the Bridge at NSS
            College of Engineering, Palakkad. Based on the feedback from the
            college, the scope of the program was widened to include financially
            weaker students along with students from socially underprivileged
            groups. Selection of the students was based on their family income,
            rank in entrance examinations, social category, etc. In addition to
            academic support, the program also included training on social and
            cultural adjustments, communication, and other soft skills.
          </p>
          <p>
            The initial plan was to start the programs for 2021-22 admissions in
            the college. However, based on the request from the college, the
            first Bridge program started with third-semester students entering
            the campus for the first time after the pandemic. Forty students
            were shortlisted for the program from a list of 500.
          </p>
          <p>
            The program was inaugurated by Principal Dr. P. R. Suresh on
            December 18, 2021. The nodal officer from the college, Dr.
            Harikrishnan, and a few members from Darsana were also present. The
            program started with Mathematics and English/Personality development
            classes.
          </p>
          <p>
            Subsequently, another batch for fresh 2021 admissions also was
            started. Forty first-year students shortlisted from 100 applications
            are participating in it.
          </p>
          <p>
            The bridge committee includes people from Kochi, Thiruvananthapuram,
            Bangalore, and Palakkad chapters to ensure close contact with all
            participating students. A group of resource persons has been
            identified to run the sessions. Sessions are monitored and managed
            using an app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BridgeKeyInviativites;
