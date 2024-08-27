// app/(admin)/Scholarships/page.tsx

"use client";
import React, { useState, useEffect } from 'react';
import { SelectScholarship } from '@/db/schema/scholarship/scholarshipData';

const ScholarshipPage: React.FC = () => {
    const [scholarships, setScholarships] = useState<SelectScholarship[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchScholarships();
    }, []);

    const fetchScholarships = async () => {
        try {
            const response = await fetch('/api/ScholarshipApi/GetScholarshipCard');
            if (!response.ok) {
                throw new Error('Failed to fetch scholarships');
            }
            const data = await response.json();
            setScholarships(data);
        } catch (err) {
            setError('Error fetching scholarships. Please try again later.');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Scholarships</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b">Application No.</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Branch</th>
                        <th className="py-2 px-4 border-b">Year</th>
                        <th className="py-2 px-4 border-b">Semester</th>
                        <th className="py-2 px-4 border-b">Type</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {scholarships.map((scholarship) => (
                        <tr key={scholarship.id}>
                            <td className="py-2 px-4 border-b">{scholarship.applicationNumber}</td>
                            <td className="py-2 px-4 border-b">{scholarship.name}</td>
                            <td className="py-2 px-4 border-b">{scholarship.branch}</td>
                            <td className="py-2 px-4 border-b">Add year if available</td>
                            <td className="py-2 px-4 border-b">{scholarship.semester}</td>
                            <td className="py-2 px-4 border-b">Add type if available</td>
                            <td className="py-2 px-4 border-b">{scholarship.status}</td>
                            <td className="py-2 px-4 border-b">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScholarshipPage;