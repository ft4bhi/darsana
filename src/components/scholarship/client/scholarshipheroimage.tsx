// components/scholarship/client/ScholarshipHeroImage.tsx

import React from 'react';

const ScholarshipHeroImage: React.FC = () => {
  return (
    <img 
      className="absolute top-[12.375rem] left-[19.125rem] w-[45rem] h-[31.25rem] object-cover" 
      alt="Scholarship hero image" 
      src="/scholarship-hero-image.png" 
    />
  );
};

export default ScholarshipHeroImage;