// src/components/scholarship/client/ContactDetails.tsx
import React from 'react';
import { InputField } from './InputField';

export interface ContactDetailsType {
    house: string;
    place: string;
    postOffice: string;
    country: string;
    pincode: string;
    city: string;
    district: string;
    whatsappNumber: string;
    studentEmail?: string;
    alternativeNumber?: string;
}

export const ContactDetails: React.FC<{
    contactDetails: ContactDetailsType;
    setContactDetails: React.Dispatch<React.SetStateAction<ContactDetailsType>>;
}> = ({ contactDetails, setContactDetails }) => {

    const handleChange = (field: keyof ContactDetailsType, value: string) => {
        setContactDetails(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <InputField
                label="House / Apartment Name"
                required
                value={contactDetails.house}
                onChange={(e) => handleChange('house', e.target.value)}
            />
            <InputField
                label="Place / State"
                required
                value={contactDetails.place}
                onChange={(e) => handleChange('place', e.target.value)}
            />
            <InputField
                label="Post Office"
                required
                value={contactDetails.postOffice}
                onChange={(e) => handleChange('postOffice', e.target.value)}
            />
            <InputField
                label="Country"
                value={contactDetails.country}
                onChange={(e) => handleChange('country', e.target.value)}
            />
            <InputField
                label="Pincode"
                required
                value={contactDetails.pincode}
                onChange={(e) => handleChange('pincode', e.target.value)}
            />
            <InputField
                label="City"
                required
                value={contactDetails.city}
                onChange={(e) => handleChange('city', e.target.value)}
            />
            <InputField
                label="District"
                required
                value={contactDetails.district}
                onChange={(e) => handleChange('district', e.target.value)}
            />
            <InputField
                label="Whatsapp number"
                required
                value={contactDetails.whatsappNumber}
                onChange={(e) => handleChange('whatsappNumber', e.target.value)}
            />
            <InputField
                label="Student Email"
                value={contactDetails.studentEmail}
                onChange={(e) => handleChange('studentEmail', e.target.value)}
            />
            <InputField
                label="Alternative number"
                value={contactDetails.alternativeNumber}
                onChange={(e) => handleChange('alternativeNumber', e.target.value)}
            />
        </div>
    );
};

