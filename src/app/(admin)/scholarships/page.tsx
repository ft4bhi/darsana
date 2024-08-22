"use client";
import React, { useState } from 'react';

// Assuming you have a type for your data
type User = {
    id: number;
    applicationNo: string;
    name: string;
    branch: string;
    year: string;
    selection: string;
    type: string;
    status: string;
    activity: string;
};

// Sample data based on the image
const users: User[] = [
    { id: 1, applicationNo: "220001", name: "Andrew Rajogithes", branch: "Computer Science", year: "III", selection: "Selected", type: "Fresh", status: "selected", activity: "3 days ago" },
    { id: 2, applicationNo: "220001", name: "Andrew Rajogithes", branch: "Computer Science", year: "III", selection: "Rejected", type: "Renewal", status: "selected", activity: "2 days ago" },
    { id: 3, applicationNo: "220001", name: "Andrew Rajogithes", branch: "Computer Science", year: "III", selection: "", type: "Fresh", status: "selected", activity: "2 days ago" },
    { id: 4, applicationNo: "220001", name: "Andrew Rajogithes", branch: "Computer Science", year: "III", selection: "", type: "Fresh", status: "selected", activity: "3 days ago" },
    { id: 5, applicationNo: "220001", name: "Andrew Rajogithes", branch: "Computer Science", year: "III", selection: "", type: "Fresh", status: "selected", activity: "2 days ago" },
];

const DashboardContent = () => {
    const [date, setDate] = useState('14 Feb 2019');
    const [status, setStatus] = useState('Status');
    const [priority, setPriority] = useState('Priority');

    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Filters and Actions */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
                        <span className="material-icons text-gray-500">filter_list</span>
                        <span className="ml-2 text-gray-600">Filter By</span>
                    </div>
                    <select
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg focus:outline-none"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    >
                        <option>14 Feb 2019</option>
                        {/* Add more date options as needed */}
                    </select>
                    <select
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg focus:outline-none"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option>Status</option>
                        {/* Add status options */}
                    </select>
                    <select
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg focus:outline-none"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option>Priority</option>
                        {/* Add priority options */}
                    </select>
                </div>
                <button className="text-red-500 flex items-center px-4 py-2 rounded-lg focus:outline-none hover:bg-red-100">
                    <span className="material-icons mr-2">refresh</span> Reset Filter
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-600 text-sm uppercase font-semibold">
                        <tr>
                            <th className="py-3 px-4">Sl. No.</th>
                            <th className="py-3 px-4">Application No.</th>
                            <th className="py-3 px-4">User</th>
                            <th className="py-3 px-4">Branch</th>
                            <th className="py-3 px-4">year</th>
                            <th className="py-3 px-4">Selection</th>
                            <th className="py-3 px-4">Type</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-t hover:bg-gray-50">
                                <td className="py-3 px-4">{user.id}</td>
                                <td className="py-3 px-4">{user.applicationNo}</td>
                                <td className="py-3 px-4">{user.name}</td>
                                <td className="py-3 px-4">{user.branch}</td>
                                <td className="py-3 px-4">{user.year}</td>
                                <td className="py-3 px-4">
                                    <span className={`py-1 px-3 rounded-full text-xs ${user.selection === 'Selected' ? 'text-green-600 bg-green-100' :
                                        user.selection === 'Rejected' ? 'text-red-600 bg-red-100' : ''
                                        }`}>
                                        {user.selection}
                                    </span>
                                </td>
                                <td className="py-3 px-4">{user.type}</td>
                                <td className="py-3 px-4">
                                    <span className="text-green-600 bg-green-100 py-1 px-3 rounded-full text-xs">
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-gray-500">{user.activity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardContent;