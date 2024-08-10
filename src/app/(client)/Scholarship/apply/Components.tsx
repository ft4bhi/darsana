"use client";
import React, { useState } from 'react'; // Import useState from React
import { FaEye, FaTrash } from 'react-icons/fa';
import jsPDF from 'jspdf';

// Button Component
export interface ButtonProps {
  onClick: () => void;
  text: string;
  variant: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, variant }) => {
  const buttonClass = variant === 'primary'
    ? 'px-4 py-2 bg-blue-500 text-white rounded'
    : 'px-4 py-2 bg-gray-200 text-gray-700 rounded';

  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
};

// Tab Component
export interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Tab: React.FC<TabProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['personal', 'contact', 'educational', 'documentation'];

  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-3 px-4 text-center ${
            activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          {tab === 'educational' ? 'Educational and Bank Details' : `${tab.charAt(0).toUpperCase() + tab.slice(1)} Details`}
        </button>
      ))}
    </div>
  );
};

// InputField Component
export interface InputFieldProps {
  label: string;
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({ label, required = false }) => {
  const inputId = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="relative mb-4">
      <input
        type="text"
        id={inputId}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
        placeholder=" "
      />
      <label
        htmlFor={inputId}
        className="absolute left-2 -top-4 text-blue-500 text-xs transition-all duration-200 transform scale-90 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:text-xs peer-focus:scale-90 bg-white px-1 cursor-text"
      >
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
  );
};

// Form Sections
export const PersonalDetails: React.FC = () => (
  <div className="grid grid-cols-2 gap-4">
    <InputField label="Name" required />
    <InputField label="DOB(DD-MM-YYYY)" required />
    <div className="col-span-1 flex items-center">
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Gender:</span>
        {['Male', 'Female', 'Other'].map((gender) => (
          <label key={gender} className="inline-flex items-center">
            <input type="radio" name="gender" value={gender.toLowerCase()} className="form-radio" />
            <span className="ml-2">{gender}</span>
          </label>
        ))}
      </div>
    </div>
    <div className="col-span-1">
      <InputField label="Nationality" required />
    </div>
    <InputField label="Category" required />
    <InputField label="Aadhar Number" required />
    <InputField label="Father Name" required />
    <InputField label="Father Phone" required />
    <InputField label="Mother Name" />
    <InputField label="Mother Phone" />
    <InputField label="Income" required />
    <InputField label="Father Occupation" />
    <InputField label="Student Phone" required />
    <InputField label="Mother Occupation" />
  </div>
);

export const ContactDetails: React.FC = () => (
  <div className="grid grid-cols-2 gap-4">
    <InputField label="House / Apartment Name" required />
    <InputField label="Place / State" required />
    <InputField label="Post Office" required />
    <InputField label="Country" />
    <InputField label="Pincode" required />
    <InputField label="City" required />
    <InputField label="District" required />
    <InputField label="Whatsapp number" required />
    <InputField label="Student Email" />
    <InputField label="Alternative number" />
  </div>
);

export const EducationalDetails: React.FC = () => (
  <div className="grid grid-cols-1 gap-4">
    <InputField label="Name Of The College" required />
    <InputField label="Branch" required />
    <InputField label="Semester" required />
    <InputField label="Hostel Resident Or Not" required />
    <InputField label="CGPA" required />
  </div>
);

export const BankDetails: React.FC = () => (
  <div className="grid grid-cols-1 gap-4">
    <InputField label="IFSC Code" required />
    <InputField label="Bank Name" required />
    <InputField label="Branch Name" required />
    <InputField label="Account Number" required />
    <InputField label="Account Holder" required />
  </div>
);





// Documentation Component
export const Documentation: React.FC = () => {
  const [files, setFiles] = useState<{ [key: number]: File | null }>({});

  // Handle view button click
  const handleViewClick = (file: File | null) => {
    if (!file) {
      alert('No file chosen');
    } else {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    }
  };

  // Handle delete button click
  const handleDeleteClick = (index: number) => {
    setFiles((prevFiles) => {
      const newFiles = { ...prevFiles };
      if (newFiles[index]) {
        delete newFiles[index];
      }
      return newFiles;
    });
    // Manually reset the file input value to show "No file chosen"
    const fileInput: HTMLInputElement | null = document.querySelector(`#file-input-${index}`);
    if (fileInput) {
      fileInput.value = '';
    }
    alert('File removed');
  };

  // Handle file input change
  const handleFileChange = (index: number, file: File | null) => {
    setFiles((prevFiles) => ({ ...prevFiles, [index]: file }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Sl.No</th>
            <th className="border p-2 text-left">Documents Required</th>
            <th className="border p-2 text-left">Document Specification</th>
            <th className="border p-2 text-left">File</th>
            <th className="border p-2 text-left">View</th>
            <th className="border p-2 text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {['Photo', 'Check', 'Aadhar Card', 'College ID Card', 'Income'].map((doc, index) => (
            <tr key={index}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{doc}</td>
              <td className="border p-2">Max Size: 100kb</td>
              <td className="border p-2">
                {files[index] ? (
                  <span>{files[index]?.name}</span>
                ) : (
                  <input
                    type="file"
                    id={`file-input-${index}`}
                    className="w-full"
                    onChange={(e) => handleFileChange(index, e.target.files?.[0] ?? null)}
                  />
                )}
              </td>
              <td className="border p-2">
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                  onClick={() => handleViewClick(files[index])}
                >
                  <FaEye />
                </button>
              </td>
              <td className="border p-2">
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleDeleteClick(index)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};