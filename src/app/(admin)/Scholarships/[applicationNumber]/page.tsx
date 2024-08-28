// src/app/(admin)/Scholarships/[applicationNumber]/page.tsx


"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { SelectScholarship } from '@/db/schema/scholarship/scholarshipData';

const ScholarshipDetailPage: React.FC = () => {
    const { applicationNumber } = useParams();
    const [scholarship, setScholarship] = useState<SelectScholarship | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchScholarshipDetail();
    }, [applicationNumber]);

    const fetchScholarshipDetail = async () => {
        try {
            console.log(`Fetching scholarship details for application number: ${applicationNumber}`);
            const response = await fetch(`/api/ScholarshipApi/GetScholarshipDetail/${applicationNumber}`);

            console.log(`Response status: ${response.status}`);

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Error response: ${errorText}`);
                throw new Error(`Failed to fetch scholarship details: ${errorText}`);
            }

            const data = await response.json();
            console.log('Fetched scholarship data:', data);
            setScholarship(data);
        } catch (err) {
            console.error('Error occurred during fetch:', err);
            setError('Error fetching scholarship details. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Scholarship Details</h1>
            {scholarship ? (
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Scholarship Details</h1>
                    <p><strong>Application No:</strong> {scholarship.applicationNumber}</p>
                    <p><strong>Name:</strong> {scholarship.name}</p>
                    <p><strong>Gender:</strong> {scholarship.gender}</p>
                    <p><strong>Category:</strong> {scholarship.category}</p>
                    <p><strong>Father's Name:</strong> {scholarship.fatherName}</p>
                    <p><strong>Mother's Name:</strong> {scholarship.motherName}</p>
                    <p><strong>Income:</strong> {scholarship.income}</p>
                    <p><strong>Phone Number:</strong> {scholarship.phoneNumber}</p>
                    <p><strong>Date of Birth:</strong> {scholarship.dateOfBirth.toString()}</p>
                    <p><strong>Nationality:</strong> {scholarship.nationality}</p>
                    <p><strong>Aadhar Number:</strong> {scholarship.adharNumber}</p>
                    <p><strong>Father's Occupation:</strong> {scholarship.fatherOccupation}</p>
                    <p><strong>Mother's Occupation:</strong> {scholarship.motherOccupation}</p>
                    <p><strong>House Number:</strong> {scholarship.houseNumber}</p>
                    <p><strong>Post Office:</strong> {scholarship.postOffice}</p>
                    <p><strong>Pin Code:</strong> {scholarship.pinCode}</p>
                    <p><strong>Bank IFSC Code:</strong> {scholarship.bankIfscCode}</p>
                    <p><strong>Bank Name:</strong> {scholarship.bankName}</p>
                    <p><strong>Bank Branch:</strong> {scholarship.bankBranch}</p>
                    <p><strong>Bank Account Number:</strong> {scholarship.bankAccountNumber}</p>
                    <p><strong>Bank Account Holder:</strong> {scholarship.bankAccountHolder}</p>
                    <p><strong>Photo:</strong> {scholarship.photo}</p>
                    <p><strong>Cheque:</strong> {scholarship.cheque}</p>
                    <p><strong>Aadhar Card:</strong> {scholarship.aadharCard}</p>
                    <p><strong>College ID:</strong> {scholarship.collegeID}</p>
                    <p><strong>Income Certificate:</strong> {scholarship.incomeCertificate}</p>
                    <p><strong>College Name:</strong> {scholarship.collegeName}</p>
                    <p><strong>Branch:</strong> {scholarship.branch}</p>
                    <p><strong>Semester:</strong> {scholarship.semester}</p>
                    <p><strong>Hostel Resident:</strong> {scholarship.hostelResident ? 'Yes' : 'No'}</p>
                    <p><strong>CGPA:</strong> {scholarship.cgpa}</p>
                    <p><strong>Year:</strong> {scholarship.year}</p>
                    <p><strong>Status:</strong> {scholarship.status}</p>
                </div>
            ) : (
                <p>No details available for this scholarship.</p>
            )}
        </div>
    );
};

export default ScholarshipDetailPage;
