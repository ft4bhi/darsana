"use client";
import React, { useState, useRef } from 'react';

const AddProductForm: React.FC = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        typeValuePairs: '',
        firstName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: '',
        country: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/ProductApi/PostProductData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitMessage('Product added successfully');
                setFormData({
                    title: '',
                    description: '',
                    category: '',
                    typeValuePairs: '',
                    firstName: '',
                    companyName: '',
                    email: '',
                    phoneNumber: '',
                    city: '',
                    state: '',
                    country: '',
                });
                setImagePreview(null);
                if (fileInputRef.current) fileInputRef.current.value = '';
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
                        <label className="block mb-2">Product Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows={4}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Type Value Pairs (JSON string)</label>
                        <textarea
                            name="typeValuePairs"
                            value={formData.typeValuePairs}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows={4}
                            placeholder='{"key1": "value1", "key2": "value2"}'
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                            <label className="block mb-2">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2">Product Image (Preview only)</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            ref={fileInputRef}
                            className="w-full p-2 border rounded"
                        />
                        {imagePreview && (
                            <div className="mt-2">
                                <img src={imagePreview} alt="Preview" className="max-w-xs h-auto" />
                            </div>
                        )}
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
        </div>
    );
};

export default AddProductForm;