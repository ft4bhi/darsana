"use client";
import React, { useState } from 'react';
import { Tab } from './Tab';
import { PersonalDetails, PersonalDetailsType } from './PersonalDetails';
import { ContactDetails, ContactDetailsType } from './ContactDetails';
import { EducationalDetails, EducationalDetailsType } from './EducationalDetails';
import { BankDetails, BankDetailsType } from './BankDetails';
import { Documentation, FilesType } from './Documentation';

const ApplyForm: React.FC = () => {
    const [activeTab, setActiveTab] = useState('personal');

    const [personalDetails, setPersonalDetails] = useState<PersonalDetailsType>({
        name: '',
        dob: '',
        gender: '',
        nationality: '',
        category: '',
        aadhar: '',
        fatherName: '',
        fatherPhone: '',
        motherName: '',
        motherPhone: '',
        income: '',
        fatherOccupation: '',
        studentPhone: '',
        motherOccupation: '',
    });

    const [contactDetails, setContactDetails] = useState<ContactDetailsType>({
        house: '',
        place: '',
        postOffice: '',
        country: '',
        pincode: '',
        city: '',
        district: '',
        whatsappNumber: '',
        studentEmail: '',
        alternativeNumber: '',
    });

    const [educationalDetails, setEducationalDetails] = useState<EducationalDetailsType>({
        college: '',
        branch: '',
        semester: '',
        hostelResident: '',
        cgpa: '',
    });

    const [bankDetails, setBankDetails] = useState<BankDetailsType>({
        ifsc: '',
        bankName: '',
        branchName: '',
        accountNumber: '',
        accountHolder: '',
    });

    const [files, setFiles] = useState<FilesType>({});

    const handleSubmitClick = async () => {
        try {
            const formData = new FormData();

            console.log('Adding scholarship data to FormData...');
            formData.append('scholarshipData', JSON.stringify({
                personalDetails,
                contactDetails,
                educationalDetails,
                bankDetails,
            }));

            console.log('Appending files to FormData...');
            for (const key in files) {
                if (files[key]) {
                    formData.append(key, files[key]);
                    console.log(`Appended file: ${key} -> ${files[key].name}`);
                }
            }

            console.log('Submitting form data...');
            const response = await fetch('/api/ScholarshipApi/PostScholarship/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Form submission successful.');
                alert('Form submitted successfully!');
            } else {
                const errorText = await response.text();
                console.error('Form submission failed:', errorText);
                alert(`Failed to submit form: ${errorText}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'personal':
                return <PersonalDetails personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />;
            case 'contact':
                return <ContactDetails contactDetails={contactDetails} setContactDetails={setContactDetails} />;
            case 'educational':
                return (
                    <>
                        <EducationalDetails educationalDetails={educationalDetails} setEducationalDetails={setEducationalDetails} />
                        <BankDetails bankDetails={bankDetails} setBankDetails={setBankDetails} />
                    </>
                );
            case 'documentation':
                return <Documentation files={files} setFiles={setFiles} />;
            default:
                return null;
        }
    };

    const showPreviousButton = activeTab !== 'personal';
    const showNextButton = activeTab !== 'documentation';

    const getPreviousTab = () => {
        switch (activeTab) {
            case 'contact':
                return 'personal';
            case 'educational':
                return 'contact';
            case 'documentation':
                return 'educational';
            default:
                return 'personal';
        }
    };

    const getNextTab = () => {
        switch (activeTab) {
            case 'personal':
                return 'contact';
            case 'contact':
                return 'educational';
            case 'educational':
                return 'documentation';
            default:
                return 'documentation';
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="p-6">
                    {renderTabContent()}
                </div>
            </div>
            <div className="flex justify-between mt-6">
                {showPreviousButton && (
                    <button
                        onClick={() => setActiveTab(getPreviousTab())}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Previous
                    </button>
                )}
                {showNextButton ? (
                    <button
                        onClick={() => setActiveTab(getNextTab())}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        onClick={handleSubmitClick}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};

export default ApplyForm;
