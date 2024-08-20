"use client";

import React, { useState } from "react";
import { format } from "date-fns";

const AddEventForm: React.FC = () => {
    const [eventTitle, setEventTitle] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventDate, setEventDate] = useState(new Date());

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventDate(new Date(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            eventTitle,
            eventDescription,
            eventDate,
        });
    };

    return (
        <div className="max-w-4xl  p-8">
            <h1 className="text-2xl font-bold mb-6">Add Upcoming Events</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label
                        htmlFor="eventTitle"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Event title
                    </label>
                    <input
                        type="text"
                        id="eventTitle"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"style={{borderRadius: '8px'}}
                        placeholder="Type here"
                    />
                </div>

                <div>
                    <label
                        htmlFor="eventDescription"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Event description
                    </label>
                    <input
                        type="text"
                        id="eventDescription"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"style={{borderRadius: '8px'}}
                        placeholder="Type here"
                    />
                </div>

                <div>
                    <label
                        htmlFor="eventDate"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Date
                    </label>
                    <input
                        type="date"
                        id="eventDate"
                        value={format(eventDate, "yyyy-MM-dd")}
                        onChange={handleDateChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"style={{borderRadius: '8px'}}
                        placeholder="DD/MM/YYYY"
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

export default AddEventForm;