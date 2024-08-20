"use client";

import React, { useState } from 'react';
import { format } from 'date-fns';

const chapters = [
  'Bangalore',
  'Palakkad',
  'Calicut',
  'Oman',
  'Saudi',
  'UAE',
  'North America',
];

const ImageUploadForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(e.target.value));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      title,
      selectedDate,
      selectedChapter,
      selectedFile,
      category,
    });
  };

  return (
    <div className="mr-8 p-8">
      <h1 className="text-2xl font-bold mb-6">Add New Images</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8" style={{ gridTemplateColumns: '60% 40%' }}>
        {/* Left Column (60%) */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Conversation Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full h-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"style={{borderRadius: '8px'}}
              placeholder="Type here..."
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              value={format(selectedDate, 'yyyy-MM-dd')}
              onChange={handleDateChange}
              className="mt-1 block w-full h-12 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"style={{borderRadius: '8px'}}
            />
          </div>

          <div>
            <label
              htmlFor="chapter"
              className="block text-sm font-medium text-gray-700"
            >
              Chapter
            </label>
            <select
              id="chapter"
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
              className="mt-1 block w-full h-12 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"style={{borderRadius: '8px'}}
            >
              <option value="">Select a chapter</option>
              {chapters.map((chapter) => (
                <option key={chapter} value={chapter}>
                  {chapter}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Column (40%) */}
        <div className="space-y-6 h-auto">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Media
            </label>
            <div className="mt-1 flex justify-center items-center px-6 pt- pb-6 border-2 h-auto border-gray-300 border-dashed rounded-md bg-white " style={{ paddingTop: '1.625rem' }}>
              <div className="text-center">
                <svg
                  className="mx-auto h-13 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mt-2 flex text-sm text-gray-600 items-center justify-center">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Choose file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div className=''>
            <label
              htmlFor="category"
              className="block text-sm font-medium  text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full h-12  rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"style={{borderRadius: '8px'}}
              placeholder="Type here..."
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="col-span-2 flex justify-end mt-6">
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

export default ImageUploadForm;
