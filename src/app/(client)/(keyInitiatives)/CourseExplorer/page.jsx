import Image from "next/image";

const CourseExplorerKeyInvitative = () => {
  return (
    <div className="relative w-full bg-white text-center text-black font-roboto">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-8 leading-tight">
          Course Explorer
        </h1>
        <Image
          className="mx-auto mb-8 rounded-lg shadow-lg"
          src="/course explorer key invitatives hero image.png"
          alt="Course Explorer Key Initiatives"
          width={678}
          height={1271}
        />
        <div className="text-left text-lg font-arial space-y-6">
          <p>
            The Darsana Calicut chapter organized an online awareness programme
            for students in the 11th and 12th grades who aspire to join
            engineering degree courses. The three-day programme titled ‘Course
            Explorer 2021’ was conducted from August 27, 2021, to August 29,
            2021.
          </p>
          <p>
            Academicians from reputed institutes handled the sessions about the
            undergraduate programmes for various branches of engineering. Each
            hour-long session included a presentation by the expert followed by
            a question-answer session.
          </p>
          <p>
            The sessions on the first day were handled by Dr. K. V. Gangadharan
            (Mechanical Engineering Department, NIT Surathkal) and Dr. E. R.
            Ushakumary (Chemical Engineering Department, GEC Kozhikode). Dr.
            Indu P. Nair (Electrical Engineering Department, COE Kidangoor) and
            Dr. Madhu Mohan (Electronics Engineering Department, Amrita School
            of Engineering) handled the sessions on the second day. The third
            day had four sessions conducted by Dr. K. A. Abdul Nazeer (Computer
            Science Department, NIT Calicut), Dr. Shyni Anilkumar (Department of
            Architecture, NIT Calicut), Dr. George K. Varghese (Civil
            Engineering Department, NIT Calicut), and Dr. K. B. Radhakrishnan
            (Biotechnology Department, SCT CE, Trivandrum). The event attracted
            students from both Kerala and outside.
          </p>
          <p>
            Around 325 students attended sessions on courses that were in great
            demand. Overall, it was a very valuable programme that helped
            students gather information about the curriculum, specific
            requirements, and opportunities of each course.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseExplorerKeyInvitative;
