"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ImageSlider from "src/components/aboutus/ImageSlider";
import DarsanaEngineers from "src/assets/aboutus/DarsanaEngineers.png";
// import Generalinformation from "../../../assets/aboutus/Generalinformation.png";
// import aboutimg2 from "../../../assets/aboutus/aboutimg2.png";
import PresentLeadership from './PresentLeadership/leaders';
import Timeline from './timeline/timeline';
type TabKey = 'OUR STORY' | 'WHAT WE DO' | 'OBJECTIVES' | 'GENERAL INFORMATION' | 'CHAPTERS' | 'PRESENT LEADERSHIP' | 'TIMELINE';

const DarsanaAboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('OUR STORY');

  const tabs: TabKey[] = ['OUR STORY', 'WHAT WE DO', 'OBJECTIVES', 'GENERAL INFORMATION', 'CHAPTERS', 'PRESENT LEADERSHIP', 'TIMELINE'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'OUR STORY':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={DarsanaEngineers.src} alt="Darsana Engineers" className="w-full h-auto object-cover" />
            <p className="text-lg">
            Darsana was established in 2007 as a charitable society with a registered office in Palakkad, Kerala. The idea for such an organization arose during a meeting of a few progressive-thinking students from the 1991 graduating class of NSS College of Engineering, Palakkad (NSSCE). The meeting was called to consider establishing an endowment for NSS College of Engineering Palakkad students in honor of their batchmate, the late Comrade Biju Cheriyan. This sparked the idea of bringing together all like-minded students from the 1960s to the millennium batches. Darsana was inaugurated on August 5, 2007, by the then honorable Education Minister of Kerala M. A. Baby in a function organized at the NSSCE campus. It was presided over by the college principal. The then member of parliament for Palakkad constituency, N. N. Krishnadas also attended. 
            </p>
          </div>
        );
      case 'WHAT WE DO':
        return (
          <div className=" grid-cols-1 md:grid-cols-2 gap-8">
            
            <p className="text-lg">
            We have undertaken many socially relevant initiatives in education, waste management, sustainable construction methods, e-governance at panchayat level and many more in addition to various charity initiatives like sponsoring economically weak students etc. We are the organisers of Biju Cherian Scholarship which finacially supports more than 40 engineering students with an annual budget outlay of Rs 5 lakhs.
            We are the proud organizers of IGNITE, the biggest innovatiion contest held for college students in Kerala. We are also very active in designing and constructing alternate and sustainable houses. Darsana so far built 10 houses for the needy. 
            </p>
            
          </div>
        );
        case 'OBJECTIVES':
        return (
          <div className=" ">
            <p className="text-lg">
            Under the banner of Darsana we have undertaken many socially relevant initiatives in education, waste management, sustainable construction methods,            
            </p>
          </div>
        );
        case 'GENERAL INFORMATION':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <p className="text-lg">
            Darsana is a professionally managed organization led by a 21-member Executive Committee. The committee members are from all over the globe. The Committee meets every two weeks via digital platforms to plan upcoming activities. We take pride in being among the first organizations to use digital platforms to run an organization effectively and efficiently.            
            </p>
            <img src={DarsanaEngineers .src} alt="Darsana building" className="w-full h-auto object-cover" />
          </div>
        );
        case 'CHAPTERS':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <p className="text-lg">
            As its members were widely dispersed across the globe, Darsana recognized early on that true growth could only be achieved through a strong network of independent chapters in various parts of the globe. Darsana's strength lies in its chapters. The programs initiated and carried out by different chapters have produced commendable results. Through chapters, Darsana's dream of becoming an umbrella organization for over 3000 former NSSCE students from the early 1960s to the present is being realized.  
            </p>
            <img src={DarsanaEngineers.src} alt="Darsana building" className="w-full h-auto object-cover" />
          </div>
        );
      case 'PRESENT LEADERSHIP':
        return <PresentLeadership />;
        case 'TIMELINE':
        return <Timeline />;
      default:
        return <p className="text-sm">Content for {activeTab} tab</p>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">ABOUT US</h1>
      <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
        We are a global diaspora of more than thousand highly experienced
        and socially committed engineers. We work towards making a
        difference in the life of needy and down trodden
      </p>

      <ImageSlider />

      <div 
        className="h-14 flex justify-between px-2 mb-6 rounded-lg overflow-x-auto" 
        style={{ backgroundColor: '#1187C9' }}
      >
        {tabs.map((tab) => (
          <button 
            key={tab} 
            className={`text-xs px-3 py-2 rounded`} 
            style={{
              backgroundColor: activeTab === tab ? '#0E5B8A' : 'transparent',
              color: activeTab === tab ? '#FFFFFF' : '#000000'
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="mb-8 px-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default DarsanaAboutPage;
