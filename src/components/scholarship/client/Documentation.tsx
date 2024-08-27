// src/components/scholarship/client/Documentation.tsx
import React from 'react';
import { FaEye, FaTrash } from 'react-icons/fa';

// Define and export the FilesType
export type FilesType = { [key: number]: File | null };

export const Documentation: React.FC<{
    files: FilesType;
    setFiles: React.Dispatch<React.SetStateAction<FilesType>>;
}> = ({ files, setFiles }) => {
    const handleViewClick = (file: File | null) => {
        if (!file) {
            alert('No file chosen');
        } else {
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        }
    };

    const handleDeleteClick = (index: number) => {
        setFiles((prevFiles) => {
            const newFiles = { ...prevFiles };
            if (newFiles[index]) {
                delete newFiles[index];
            }
            return newFiles;
        });
        const fileInput: HTMLInputElement | null = document.querySelector(`#file-input-${index}`);
        if (fileInput) {
            fileInput.value = '';
        }
        alert('File removed');
    };

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
