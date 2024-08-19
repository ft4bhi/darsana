import React from 'react';
import Image from 'next/image';
import houseConstructionKey from "@/assets/initiatives/House_construction_key.png";

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-black">
          House Constructions
        </h1>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src={houseConstructionKey.src}
          alt="House Construction"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
        <p className="mb-4">
          As a socially committed organization, Darsana decided to join the “Rebuild Kerala” initiative by the Government of Kerala to support the families affected by the floods in 2018.
        </p>

        <p className="mb-4">
          Darsana also decided to use its engineering skills to design cost-effective, sustainable houses as part of this initiative, bearing in mind the impact of cost, time, and environment. It formed a team to develop a methodology to achieve this goal and manage execution.
        </p>

        <p className="mb-4">
          Darsana's team constructed six houses in Palakkad under the supervision of Sri. Shibu and three homes in Calicut and Malappuram coordinated by Sri. Babeesh.
        </p>

        <p className="mb-4">
          Darsana members contributed about Rs. 24 lakhs for this noble cause. Most of the houses were constructed with fly ash blocks and truss roofing with Mangalore tile to reduce cost and time.
        </p>

        <ul className="list-disc ml-8 mb-8 text-gray-700 text-lg">
          <li><strong>First project of My home</strong> for Smt. Sreedevi Amma at Railway Colony, Palakkad. A 500 Sq ft house was constructed in 22 days at the cost of Rs. 4,96,180. The key handover was done by Com. V. S. Achuthanandan and Com. M. B. Rajesh on 21/12/18.</li>
          <li><strong>Marutharoad project</strong> for Smt. Nabeesa at Marutha road, Palakkad. 451 Sq ft house constructed at the cost of Rs. 5,08,354. The key handover was done by Com. M. B. Rajesh on 12/03/19.</li>
          <li><strong>Kallikkad project</strong> for Smt. Kashu at Kallikkad with the support of service cooperative bank. 440 Sq ft house constructed at the cost of Rs. 5,16,645. The key handover was done by bank authorities on 21/04/19.</li>
          <li><strong>Calicut First project of My home</strong> for Smt. Subhaida at Kadalundy. 450 Sq ft house constructed at the cost of Rs. 5,71,315. The key handover was done by V. K. C. Mammad Koya, MLA on 12/06/19.</li>
          <li><strong>Railway colony Project</strong> for Shri. Preman at Railway Colony, Palakkad along with Spark. 298 Sq ft house constructed at the cost of Rs. 2,35,446. The key handover was done by Com. M. B. Rajesh on 17/07/19.</li>
          <li><strong>Paitankunnu project of My home</strong> for Smt. Vella at Paittankunnu, Palakkad. 392 Sq ft house constructed at the cost of Rs. 5,74,995. The key handover was done by Com N N Krishnadas.</li>
        </ul>

        <p className="mb-4">
          Darsana coordinated a seminar on the topic “Alternative methods in house construction” at the venue of “Nattuvicharam” coordinated by Com. Niranjan on December 26 & 27, 2019.
        </p>

        <p className="mb-4">
          Darsana participated and won 2nd place for the construction methodology in a one-day workshop and exhibition “NEW HOUSING LITERACY FOR REBUILDING KERALA” conducted by NIT Calicut.
        </p>

        <p>
          The 11th house with the funding of KC’s WomenWings, USA was constructed at Mannaar, Alappuzha.
        </p>
      </div>
    </div>
  );
};

export default Page;
