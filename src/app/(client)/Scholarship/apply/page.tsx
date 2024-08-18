"use client";
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { FaEye, FaTrash } from 'react-icons/fa';
import { PersonalDetails, ContactDetails, EducationalDetails, BankDetails, Documentation } from '@/components/scholarship/client/applyComponent';



const ScholarshipForm: React.FC = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [showDraftSaved, setShowDraftSaved] = useState(false);



    const renderTabContent = () => {
        switch (activeTab) {
            case 'personal':
                return <PersonalDetails />;
            case 'contact':
                return <ContactDetails />;
            case 'educational':
                return (
                    <div className="grid grid-cols-2 gap-4">
                        <EducationalDetails />
                        <BankDetails />
                    </div>
                );
            case 'documentation':
                return <Documentation />;
            default:
                return null;
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        const personalDetails = {
            name: 'Name',
            dob: 'DOB',
            gender: 'Gender',
            nationality: 'Nationality',
            // add more fields as needed
        };
        const contactDetails = {
            address: 'Address',
            city: 'City',
            // add more fields as needed
        };
        const educationalDetails = {
            college: 'College',
            branch: 'Branch',
            // add more fields as needed
        };
        const bankDetails = {
            ifsc: 'IFSC',
            bankName: 'Bank Name',
            // add more fields as needed
        };

        let y = 10;
        doc.text('Personal Details:', 10, y);
        Object.entries(personalDetails).forEach(([key, value]) => {
            y += 10;
            doc.text(`${key}: ${value}`, 10, y);
        });

        y += 10;
        doc.text('Contact Details:', 10, y);
        Object.entries(contactDetails).forEach(([key, value]) => {
            y += 10;
            doc.text(`${key}: ${value}`, 10, y);
        });

        y += 10;
        doc.text('Educational Details:', 10, y);
        Object.entries(educationalDetails).forEach(([key, value]) => {
            y += 10;
            doc.text(`${key}: ${value}`, 10, y);
        });

        y += 10;
        doc.text('Bank Details:', 10, y);
        Object.entries(bankDetails).forEach(([key, value]) => {
            y += 10;
            doc.text(`${key}: ${value}`, 10, y);
        });

        doc.save('scholarship_form.pdf');
    };

    const handleNextClick = () => {
        setShowDraftSaved(true);
        setTimeout(() => {
            setShowDraftSaved(false);
        }, 3000);

        const tabs = ['personal', 'contact', 'educational', 'documentation'];

        const currentIndex = tabs.indexOf(activeTab);
        const nextIndex = currentIndex + 1;
        if (nextIndex < tabs.length) {
            setActiveTab(tabs[nextIndex]);
        }
    };

    const handlePreviousClick = () => {
        const tabs = ['personal', 'contact', 'educational', 'documentation'];
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

        const tabs = ['personal', 'contact', 'educational', 'documentation'];
        const currentIndex = tabs.indexOf(activeTab);
        const nextIndex = currentIndex + 1;
        if (nextIndex < tabs.length) {
            setActiveTab(tabs[nextIndex]);
        } else if (activeTab === 'documentation') {
            generatePDF();  // Generate PDF on submission
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="flex border-b">
                    {['personal', 'contact', 'educational', 'documentation'].map((tab) => (
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
            <div className="flex justify-between mt-6">
                {activeTab !== 'personal' && (
                    <>
                        {activeTab !== 'personal' && (
                            <button
                                onClick={handlePreviousClick}
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Previous
                            </button>
                        )}
                        {activeTab !== 'documentation' && (
                            <button
                                onClick={handleNextClick}
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Next
                            </button>
                        )}
                        {activeTab === 'documentation' && (
                            <button
                                onClick={handleSubmitClick}
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Submit
                            </button>
                        )}
                    </>
                )}
                {activeTab === 'personal' && (
                    <div className="w-full flex justify-end">
                        <button
                            onClick={handleNextClick}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>



            {showDraftSaved && (
                <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
                    Draft saved!
                </div>
            )}
        </div>
    );
};

export default ScholarshipForm;