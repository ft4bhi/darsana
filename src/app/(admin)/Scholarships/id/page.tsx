"use client";
import React, { useState } from 'react';
import {
    PersonalDetails,
    ContactDetails,
    EducationalAndBankDetails,
    Documentation,
    Verification,
    ScholarshipDetails
} from '@/components/scholarshipadmin/ScholarshipDetailsComponent'; // Adjust the import path if needed

const initialScholarshipDetails: ScholarshipDetails = {
    name: '',
    dob: '',
    gender: '',
    nationality: '',
    category: '',
    aadharNumber: '',
    fatherName: '',
    fatherPhone: '',
    motherName: '',
    motherPhone: '',
    income: '',
    fatherOccupation: '',
    studentPhone: '',
    motherOccupation: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    houseApartmentName: '',
    placeState: '',
    postOffice: '',
    country: '',
    pincode: '',
    district: '',
    whatsappNumber: '',
    studentEmail: '',
    alternativeNumber: '',
    highSchool: '',
    highSchoolPercentage: 0,
    intermediate: '',
    intermediatePercentage: 0,
    nameOfTheCollege: '',
    branch: '',
    semester: '',
    hostelResident: '',
    cgpa: 0,
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    branchName: '',
    accountHolder: '',
    status: 'Verify',
    remark: '',
};

const documentationData = [
    { id: 1, name: "Photo", size: "100kb", file: "photo.pdf" },
    { id: 2, name: "Check", size: "100kb", file: "check.pdf" },
    { id: 3, name: "Aadhar Card", size: "100kb", file: "aadhar.pdf" },
    { id: 4, name: "College ID Card", size: "100kb", file: "id.pdf" },
    { id: 5, name: "Income", size: "100kb", file: "income.pdf" },
];

const initialVerificationTable = [
    { label: 'Verified by Darsana', value: '', admin: 'Admin 1' },
        { label: 'Selected for Scholarship', value: '', admin: '' },
        { label: 'Amount processed from Darsana', value: '', admin: 'Admin 2' }
];

const Page: React.FC = () => {
    const [scholarshipDetails, setScholarshipDetails] = useState<ScholarshipDetails>(initialScholarshipDetails);
    const [status, setStatus] = useState<string>(initialScholarshipDetails.status);
    const [verificationTable, setVerificationTable] = useState(initialVerificationTable);
    const [activeTab, setActiveTab] = useState('personal');
    const [showDraftSaved, setShowDraftSaved] = useState(false);

    const handleNextClick = () => {
        setShowDraftSaved(true);
        setTimeout(() => {
            setShowDraftSaved(false);
        }, 3000);

        const tabs = ['personal', 'contact', 'educational', 'documentation', 'verification'];
        const currentIndex = tabs.indexOf(activeTab);
        const nextIndex = currentIndex + 1;
        if (nextIndex < tabs.length) {
            setActiveTab(tabs[nextIndex]);
        }
    };

    const handlePreviousClick = () => {
        const tabs = ['personal', 'contact', 'educational', 'documentation', 'verification'];
        const currentIndex = tabs.indexOf(activeTab);
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            setActiveTab(tabs[prevIndex]);
        }
    };

    const handleSubmitClick = () => {
        setShowDraftSaved(true);
        setTimeout(() => {
            setShowDraftSaved(false);
        }, 3000);

        if (activeTab === 'verification') {
            generatePDF();  // Generate PDF on submission
        } else {
            handleNextClick();  // Move to the next tab
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'personal':
                return <PersonalDetails scholarshipDetails={scholarshipDetails} />;
            case 'contact':
                return <ContactDetails scholarshipDetails={scholarshipDetails} />;
            case 'educational':
                return <EducationalAndBankDetails scholarshipDetails={scholarshipDetails} />;
            case 'documentation':
                return <Documentation documentationData={documentationData} />;  // Pass your documentation data here
            case 'verification':
                return (
                    <Verification
                        status={status}
                        setStatus={setStatus}
                        verificationTable={verificationTable}
                        setVerificationTable={setVerificationTable}
                        scholarshipDetails={scholarshipDetails}
                        setScholarshipDetails={setScholarshipDetails}
                    />
                );
            default:
                return null;
        }
    };

    const generatePDF = () => {
        // Logic to generate PDF
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="flex border-b">
                    {['personal', 'contact', 'educational', 'documentation', 'verification'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-3 px-4 text-center ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
                                }`}
                        >
                            {tab === 'educational' ? 'Educational and Bank Details' : `${tab.charAt(0).toUpperCase() + tab.slice(1)} Details`}
                        </button>
                    ))}
                </div>
                <div className="p-6">{renderTabContent()}</div>
            </div>
            <div className={`flex mt-6 ${activeTab === 'personal' ? 'justify-end' : 'justify-between'}`}>
                {activeTab !== 'personal' && (
                    <button
                        onClick={handlePreviousClick}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Previous
                    </button>
                )}
               
                {activeTab !== 'verification'  ? (
                    <button
                        onClick={handleNextClick}
                        className="px-4 py-2  bg-blue-500 text-white rounded"
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
            {showDraftSaved && <div className="mt-4 text-green-500">Draft saved!</div>}
        </div>
    );
};

export default Page;
