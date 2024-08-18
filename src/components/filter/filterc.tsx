'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaFilter, FaRedo } from 'react-icons/fa';
import { format } from 'date-fns';
import './Filter.css';

interface FilterProps {
  onFilterChange: (filters: { month: string; year: string; category: string; search: string; chapter: string }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [date, setDate] = useState<Date | null>(null);
  const [category, setCategory] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [chapter, setChapter] = useState<string>(''); // New state for chapter

  // Reset all filter criteria
  const handleReset = () => {
    setDate(null);
    setCategory('');
    setSearch('');
    setChapter('');
    onFilterChange({ month: '', year: '', category: '', search: '', chapter: '' });
  };

  // Update filter criteria
  const handleChange = () => {
    const month = date ? format(date, 'MMMM') : '';
    const year = date ? format(date, 'yyyy') : '';
    onFilterChange({ month, year, category, search, chapter });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 overflow-x-auto">
        {/* Filter Icon and Text */}
        <div className="flex items-center">
          <FaFilter className="text-gray-600 mr-2" />
          <span className="text-lg font-semibold text-gray-800">Filter Events</span>
        </div>

        {/* Date Picker for Month and Year */}
        <div className="flex-1">
          <DatePicker
            selected={date}
            onChange={(date) => {
              setDate(date);
              const month = date ? format(date, 'MMMM') : '';
              const year = date ? format(date, 'yyyy') : '';
              onFilterChange({ month, year, category, search, chapter });
            }}
            dateFormat="MMMM yyyy"
            showMonthYearPicker
            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm custom-datepicker"
            placeholderText="Select month and year"
          />
        </div>

        {/* Category Selection Dropdown */}
        <div className="flex-1">
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              onFilterChange({ month: date ? format(date, 'MMMM') : '', year: date ? format(date, 'yyyy') : '', category: e.target.value, search, chapter });
            }}
            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white"
          >
            <option value="">Category</option>
            <option value="scholarship">Scholarship</option>
            <option value="support">Support</option>
            <option value="house construction">House Construction</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        {/* Chapter Selection Dropdown */}
        <div className="flex-1">
          <select
            id="chapter"
            value={chapter}
            onChange={(e) => {
              setChapter(e.target.value);
              onFilterChange({ month: date ? format(date, 'MMMM') : '', year: date ? format(date, 'yyyy') : '', category, search, chapter: e.target.value });
            }}
            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white"
          >
            <option value="">Chapter</option>
            <option value="calicut">Calicut</option>
            <option value="bengaluru">Bengaluru</option>
            <option value="north-america">North-America</option>
            <option value="palakkad">Palakkad</option>
            <option value="oman">Oman</option>
            <option value="saudi">Saudi</option>
            <option value="uae">UAE</option>
            {/* Add more chapters as needed */}
          </select>
        </div>

        {/* Search Box for Title */}
        <div className="flex-1">
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              onFilterChange({ month: date ? format(date, 'MMMM') : '', year: date ? format(date, 'yyyy') : '', category, search: e.target.value, chapter });
            }}
            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Search events"
          />
        </div>

        {/* Reset Filter Button */}
        <button
          onClick={handleReset}
          className="flex items-center px-4 py-2 text-red-500 rounded-lg hover:text-red-700 focus:outline-none "
        >
          <FaRedo className="mr-2" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default Filter;
