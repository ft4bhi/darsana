// src/components/scholarship/client/EducationalDetails.tsx

import React from 'react';
import { InputField } from './InputField';

export interface EducationalDetailsType {
    college: string;
    branch: string;
    semester: string;
    hostelResident: string;
    cgpa: string;
}

export const EducationalDetails: React.FC<{
    educationalDetails: EducationalDetailsType;
    setEducationalDetails: React.Dispatch<React.SetStateAction<EducationalDetailsType>>;
}> = ({ educationalDetails, setEducationalDetails }) => {

    const handleChange = (field: keyof EducationalDetailsType, value: string) => {
        setEducationalDetails(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            <InputField
                label="Name Of The College"
                required
                value={educationalDetails.college}
                onChange={(e) => handleChange('college', e.target.value)}
            />
            <InputField
                label="Branch"
                required
                value={educationalDetails.branch}
                onChange={(e) => handleChange('branch', e.target.value)}
            />
            <InputField
                label="Semester"
                required
                value={educationalDetails.semester}
                onChange={(e) => handleChange('semester', e.target.value)}
            />
            <InputField
                label="Hostel Resident Or Not"
                required
                value={educationalDetails.hostelResident}
                onChange={(e) => handleChange('hostelResident', e.target.value)}
            />
            <InputField
                label="CGPA"
                required
                value={educationalDetails.cgpa}
                onChange={(e) => handleChange('cgpa', e.target.value)}
            />
        </div>
    );
};
