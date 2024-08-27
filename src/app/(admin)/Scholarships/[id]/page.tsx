//src/app/(admin)/Scholarships/[id]/page.tsx

"use client";
import React, { useState, useEffect } from 'react';
import {
    PersonalDetails,
    ContactDetails,
    EducationalAndBankDetails,
    Documentation,
    Verification,
    ScholarshipDetails
} from '@/components/scholarshipadmin/ScholarshipDetailsComponent';

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
    const [scholarshipDetails, setScholarshipDetails] = useState<ScholarshipDetails | null>(null);
    const [status, setStatus] = useState<string>('');
    const [verificationTable, setVerificationTable] = useState(initialVerificationTable);
    const [activeTab, setActiveTab] = useState('personal');
    const [showDraftSaved, setShowDraftSaved] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [applicationNumber, setApplicationNumber] = useState<string>('');

    const fetchScholarshipData = async (applicationNumber: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/ScholarshipApi/GetScholarship/${applicationNumber}`);
            if (!response.ok) {
                throw new Error('Failed to fetch scholarship data');
            }
            const data = await response.json();
            setScholarshipDetails(data);
            setStatus(data.status);
        } catch (err) {
            setError('Error fetching scholarship data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        if (applicationNumber) {
            fetchScholarshipData(applicationNumber);
        }
    };

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
            generatePDF();
        } else {
            handleNextClick();
        }
    };

    const renderTabContent = () => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (!scholarshipDetails) {
            return <div>No scholarship data available</div>;
        }

        switch (activeTab) {
            case 'personal':
                return <PersonalDetails scholarshipDetails={scholarshipDetails} />;
            case 'contact':
                return <ContactDetails scholarshipDetails={scholarshipDetails} />;
            case 'educational':
                return <EducationalAndBankDetails scholarshipDetails={scholarshipDetails} />;
            case 'documentation':
                return <Documentation documentationData={documentationData} />;
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
            <div className="mb-6">
                <input
                    type="text"
                    value={applicationNumber}
                    onChange={(e) => setApplicationNumber(e.target.value)}
                    placeholder="Enter Application Number"
                    className="mr-2 p-2 border rounded"
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Search
                </button>
            </div>
            {scholarshipDetails && (
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
            )}
            {scholarshipDetails && (
                <div className={`flex mt-6 ${activeTab === 'personal' ? 'justify-end' : 'justify-between'}`}>
                    {activeTab !== 'personal' && (
                        <button
                            onClick={handlePreviousClick}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Previous
                        </button>
                    )}

                    {activeTab !== 'verification' ? (
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
            )}
            {showDraftSaved && <div className="mt-4 text-green-500">Draft saved!</div>}
        </div>
    );
};

export default Page;