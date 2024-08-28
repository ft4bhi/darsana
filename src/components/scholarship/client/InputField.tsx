// src/components/scholarship/client/InputField.tsx
import React from 'react';

export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string; // Add type prop
}

export const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    required = false,
    type = 'text', // Default to 'text' if type is not provided
}) => {
    const inputId = label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="relative mb-4">
            <input
                type={type} // Use the type prop here
                id={inputId}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                placeholder=" "
                value={value}
                onChange={onChange}
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
