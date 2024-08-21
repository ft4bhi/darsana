'use client'
import { useState } from 'react';

interface ProductFormData {
    title: string;
    description: string;
    category: string;
    typeValuePairs: { type: string; value: string }[];
    firstName: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    city: string;
    state: string;
    country: string;
    vendorId: number;
    images: File[];
}

const ProductForm = () => {
    const [formData, setFormData] = useState<ProductFormData>({
        title: '',
        description: '',
        category: '',
        typeValuePairs: Array(6).fill({ type: '', value: '' }),
        firstName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: '',
        country: '',
        vendorId: 0,
        images: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, dataset, files } = e.target as HTMLInputElement & { files: FileList };
        const [index, field] = dataset.id?.split('-') || [];

        if (name === 'typeValuePairs' && index !== undefined && field) {
            const updatedPairs = [...formData.typeValuePairs];
            updatedPairs[parseInt(index)] = { ...updatedPairs[parseInt(index)], [field]: value };
            setFormData({
                ...formData,
                typeValuePairs: updatedPairs,
            });
        } else if (name === 'images' && files) {
            const selectedFiles = Array.from(files) as File[];
            if (selectedFiles.length > 6) {
                alert('You can only upload up to 6 images');
            } else {
                setFormData({
                    ...formData,
                    images: selectedFiles,
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('typeValuePairs', JSON.stringify(formData.typeValuePairs));
        formDataToSend.append('firstName', formData.firstName);
        formDataToSend.append('companyName', formData.companyName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phoneNumber', formData.phoneNumber);
        formDataToSend.append('city', formData.city);
        formDataToSend.append('state', formData.state);
        formDataToSend.append('country', formData.country);
        formDataToSend.append('vendorId', formData.vendorId.toString());

        formData.images.forEach((image, index) => {
            formDataToSend.append(`images[${index}]`, image);
        });

        try {
            const response = await fetch('/api/Postproduct', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.json();
            if (response.ok) {
                alert('Product added successfully');
                console.log(result);
            } else {
                alert('Failed to add product');
                console.error(result);
            }
        } catch (error) {
            alert('An error occurred');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Type-Value Pairs Section */}
            <div>
                <label htmlFor="typeValuePairs" className="block text-sm font-medium text-gray-700">Type-Value Pairs</label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    {formData.typeValuePairs.map((pair, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <input
                                type="text"
                                name="typeValuePairs"
                                data-id={`${index}-type`}
                                value={pair.type}
                                onChange={handleChange}
                                placeholder={`Type ${index + 1}`}
                                className="p-2 border border-gray-300 rounded-md"
                            />
                            <input
                                type="text"
                                name="typeValuePairs"
                                data-id={`${index}-value`}
                                value={pair.value}
                                onChange={handleChange}
                                placeholder={`Value ${index + 1}`}
                                className="p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Title Field */}
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Description Field */}
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Category Field */}
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* First Name Field */}
            <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Company Name Field */}
            <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Phone Number Field */}
            <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* City Field */}
            <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* State Field */}
            <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Country Field */}
            <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Images Field */}
            <div>
                <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
                <input
                    type="file"
                    id="images"
                    name="images"
                    accept="image/*"
                    multiple
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

export default ProductForm;
