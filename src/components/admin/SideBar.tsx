'use client';
import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = useRouter();

    return (
        <div className="w-64 bg-white shadow-lg min-h-screen">
            <div className="p-6">
                <img
                    src="/path/to/your-logo.png"
                    alt="Admin Dashboard"
                    className="w-20 h-20 mb-6"
                />
                <div className="space-y-2">
                    {/* Dashboard Button */}
                    <button
                        onClick={() => router.push('/(admin)/dashboard')}
                        className={`flex items-center w-full p-3 rounded-lg ${router.pathname === '/admin/dashboard'
                            ? 'bg-purple-100 text-purple-600'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <span className="material-icons-outlined mr-3">dashboard</span>
                        <span>Dashboard</span>
                    </button>

                    {/* Product Button */}
                    <button
                        onClick={() => router.push('/(admin)/dashboard')}
                        className={`flex items-center w-full p-3 rounded-lg ${router.pathname === '/product'
                            ? 'bg-purple-100 text-purple-600'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <span className="material-icons-outlined mr-3">inventory_2</span>
                        <span>Product</span>
                    </button>

                    {/* Scholarship Button */}
                    <button
                        onClick={() => router.push('/(admin)/dashboard')}
                        className={`flex items-center w-full p-3 rounded-lg ${router.pathname === '/scholarship'
                            ? 'bg-purple-100 text-purple-600'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <span className="material-icons-outlined mr-3">school</span>
                        <span>Scholarship</span>
                    </button>
                </div>

                {/* Logout Button */}
                <button
                    onClick={() => {
                        // Implement logout functionality
                    }}
                    className="flex items-center w-full p-3 mt-10 rounded-lg text-red-600 hover:bg-red-100"
                >
                    <span className="material-icons-outlined mr-3">logout</span>
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
