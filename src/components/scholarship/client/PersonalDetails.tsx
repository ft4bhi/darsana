// src/components/scholarship/client/PersonalDetails.tsx

import React from 'react';
import { InputField } from './InputField';

export interface PersonalDetailsType {
    name: string;
    dob: string;
    gender: string;
    nationality: string;
    category: string;
    aadhar: string;
    fatherName: string;
    fatherPhone: string;
    motherName?: string;
    motherPhone?: string;
    income: string;
    fatherOccupation?: string;
    studentPhone: string;
    motherOccupation?: string;
}

export const PersonalDetails: React.FC<{
    personalDetails: PersonalDetailsType;
    setPersonalDetails: React.Dispatch<React.SetStateAction<PersonalDetailsType>>;
}> = ({ personalDetails, setPersonalDetails }) => {
    // Helper function to update the personal details state
    const handleChange = (field: keyof PersonalDetailsType, value: string) => {
        setPersonalDetails((prevDetails) => ({
            ...prevDetails,
            [field]: value,
        }));
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <InputField
                label="Name"
                required
                value={personalDetails.name}
                onChange={(e) => handleChange('name', e.target.value)}
            />
            <InputField
                label="DOB"
                type="date"
                required
                value={personalDetails.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
            />

            <div className="col-span-1 flex items-center">
                <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Gender:</span>
                    {['Male', 'Female', 'Other'].map((gender) => (
                        <label key={gender} className="inline-flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value={gender.toLowerCase()}
                                className="form-radio"
                                checked={personalDetails.gender === gender.toLowerCase()}
                                onChange={(e) => handleChange('gender', e.target.value)}
                            />
                            <span className="ml-2">{gender}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="col-span-1">
                <InputField
                    label="Nationality"
                    required
                    value={personalDetails.nationality}
                    onChange={(e) => handleChange('nationality', e.target.value)}
                />
            </div>
            <InputField
                label="Category"
                required
                value={personalDetails.category}
                onChange={(e) => handleChange('category', e.target.value)}
            />
            <InputField
                label="Aadhar Number"
                required
                value={personalDetails.aadhar}
                onChange={(e) => handleChange('aadhar', e.target.value)}
            />
            <InputField
                label="Father Name"
                required
                value={personalDetails.fatherName}
                onChange={(e) => handleChange('fatherName', e.target.value)}
            />
            <InputField
                label="Father Phone"
                required
                value={personalDetails.fatherPhone}
                onChange={(e) => handleChange('fatherPhone', e.target.value)}
            />
            <InputField
                label="Mother Name"
                value={personalDetails.motherName || ''}
                onChange={(e) => handleChange('motherName', e.target.value)}
            />
            <InputField
                label="Mother Phone"
                value={personalDetails.motherPhone || ''}
                onChange={(e) => handleChange('motherPhone', e.target.value)}
            />
            <InputField
                label="Income-give number"
                required
                value={personalDetails.income}
                onChange={(e) => handleChange('income', e.target.value)}
            />
            <InputField
                label="Father Occupation"
                value={personalDetails.fatherOccupation || ''}
                onChange={(e) => handleChange('fatherOccupation', e.target.value)}
            />
            <InputField
                label="Student Phone"
                required
                value={personalDetails.studentPhone}
                onChange={(e) => handleChange('studentPhone', e.target.value)}
            />
            <InputField
                label="Mother Occupation"
                value={personalDetails.motherOccupation || ''}
                onChange={(e) => handleChange('motherOccupation', e.target.value)}
            />
        </div>
    );
};
