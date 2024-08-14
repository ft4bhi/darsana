import React from 'react';
import ambulance from "@/assets/initiatives/Ambulance.png";

const PalliativeCarePage: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Ambulance to Palliative Care Unit</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src={ambulance.src} 
          alt="Ambulance to Palliative Care Unit" 
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        />
      </div>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <p style={{ color: '#555', lineHeight: '1.6' }}>
          Darsana contributed an Ambulance for EMS Jana Sevana Kendram, a Palliative Care Society, formed at Palakkad, in 2013. 
          The fund for the purchase of the ambulance was generated through generous contributions of Darsana members. The 
          state-of-the-art ambulance was handed over to the society (EMSJSK) on 13th June 2013.
        </p>
        <p style={{ color: '#555', lineHeight: '1.6' }}>
          This initiative was widely appreciated as proof of Darsana's commitment to social causes.
        </p>
      </div>
    </div>
  );
};

export default PalliativeCarePage;
