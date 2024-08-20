"use client";

import React, { useState } from "react";

const Form: React.FC = () => {
    const [date, setDate] = useState<string>("");

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    return (
        <div className="max-w-4xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Add New Conversation</h2>
            <form className="space-y-6">
                <div>
                    <label
                        htmlFor="conversationTitle"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Conversation Title
                    </label>
                    <input
                        type="text"
                        id="conversationTitle"
                        placeholder="Conversation title"
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-4"
                        style={{ borderRadius: "8px" }}
                    />
                </div>

                <div>
                    <label
                        htmlFor="conversationDate"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Date
                    </label>
                    <input
                        type="date"
                        id="conversationDate"
                        value={date}
                        onChange={handleDateChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-4"
                        style={{ borderRadius: "8px" }}
                    />
                </div>

                <div>
                    <label
                        htmlFor="youtubeUrl"
                        className="block text-sm font-medium text-gray-700"
                    >
                        YouTube Embed URL
                    </label>
                    <input
                        type="text"
                        id="youtubeUrl"
                        placeholder="YouTube embed URL"
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-4"
                        style={{ borderRadius: "8px" }}
                    />
                </div>

                <div>
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        placeholder="Category"
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-4"
                        style={{ borderRadius: "8px" }}
                    />
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        type="submit"
                        className="px-6 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
