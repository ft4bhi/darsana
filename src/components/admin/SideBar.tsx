'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Sidebar = () => {
    const pathname = usePathname();
    const [showProductMenu, setShowProductMenu] = useState(false);

    return (
        <div className="w-64 bg-white shadow-lg min-h-screen">
            <div className="p-6">
                {/* <img
          src="/path/to/your-logo.png"
          alt="Admin Dashboard"
          className="w-20 h-20 mb-6"
        /> */}
                <div className="space-y-2">
                    {/* Dashboard Button */}
                    <Link href="/dashboard" passHref>
                        <button
                            className={`flex items-center w-full p-3  transition duration-300 ${pathname === '/dashboard'
                                ? 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                        >

                            Dashboard
                        </button>
                    </Link>

                    {/* Product Button */}
                    <button
                        onClick={() => setShowProductMenu(!showProductMenu)}
                        className={`flex items-center w-full p-3  transition duration-300 ${pathname.startsWith('/adminProduct')
                            ? 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                    >

                        Products
                    </button>

                    {showProductMenu && (
                        <div className="ml-4 space-y-2">
                            <Link href="/adminProduct/list" passHref>
                                <button
                                    className={`flex items-center w-full p-3  transition duration-300 ${pathname === '/adminProduct/list'
                                        ? 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                >

                                    Product List
                                </button>
                            </Link>

                            <Link href="/adminProduct/add" passHref>
                                <button
                                    className={`flex items-center w-full p-3  transition duration-300 ${pathname === '/adminProduct/add'
                                        ? 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                >

                                    Add Product
                                </button>
                            </Link>
                        </div>
                    )}

                    {/* Scholarship Button */}
                    <Link href="/adminScholarship" passHref>
                        <button
                            className={`flex items-center w-full p-3  transition duration-300 ${pathname === '/adminScholarship'
                                ? 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                        >

                            Scholarships
                        </button>
                    </Link>

                    {/* Logout Button */}
                    <button
                        onClick={() => {
                            // Implement logout functionality
                        }}
                        className="flex items-center w-full p-3 mt-10  transition duration-300 text-red-600 hover:bg-red-100 hover:text-red-900"
                    >

                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;