// src\components\AdminProduct\AddProductForm.tsx

"use client";
import React, { useState } from 'react';

const AddProductForm: React.FC = () => {
    const [productTitle, setProductTitle] = useState('');
    const [description, setDescription] = useState('');
    const [firstName, setFirstName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [customFields, setCustomFields] = useState<{ type: string; value: string }[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleAddCustomField = () => {
        if (customFields.length < 6) {
            setCustomFields([...customFields, { type: '', value: '' }]);
        } else {
            alert('You can add up to six custom fields only.');
        }
    };

    const handleCustomFieldChange = (index: number, field: string, value: string) => {
        const updatedFields = customFields.map((cf, i) => i === index ? { ...cf, [field]: value } : cf);
        setCustomFields(updatedFields);
    };

    const handleRemoveCustomField = (index: number) => {
        setCustomFields(customFields.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        const formData = {
            productTitle,
            description,
            firstName,
            companyName,
            email,
            phoneNumber,
            city,
            state,
            location,
            category,
            customFields, // Send the custom fields as an array of objects
        };

        try {
            const response = await fetch('/api/PostProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitMessage('Product added successfully');
                // Reset form fields here if needed
            } else {
                setSubmitMessage('Failed to add product. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitMessage('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow">
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-4">Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Product title</label>
                        <input
                            type="text"
                            value={productTitle}
                            onChange={(e) => setProductTitle(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Full description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border rounded"
                            rows={4}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="button"
                            onClick={handleAddCustomField}
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Add Custom Field
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        {customFields.map((field, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-2">
                                <input
                                    type="text"
                                    value={field.type}
                                    onChange={(e) => handleCustomFieldChange(index, 'type', e.target.value)}
                                    placeholder="Type"
                                    className="flex-1 p-2 border rounded"
                                    required
                                />
                                <input
                                    type="text"
                                    value={field.value}
                                    onChange={(e) => handleCustomFieldChange(index, 'value', e.target.value)}
                                    placeholder="Value"
                                    className="flex-1 p-2 border rounded"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveCustomField(index)}
                                    className="bg-red-500 text-white py-2 px-4 rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2">First Name</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">City</label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Company Name</label>
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">State</label>
                        <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Phone Number</label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Location</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Saving...' : 'Save'}
                    </button>
                    {submitMessage && (
                        <p className={`mt-2 ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                            {submitMessage}
                        </p>
                    )}
                </form>
            </div>
            <div className="w-full md:w-1/3">
                <h2 className="text-xl font-bold mb-4">Media</h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <button className="mt-2 px-4 py-2 bg-gray-200 rounded">Choose File</button>
                    <p className="mt-1 text-sm text-gray-500">No file chosen</p>
                </div>
                <div className="mt-4">
                    <label className="block mb-2">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="books">Books</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;
