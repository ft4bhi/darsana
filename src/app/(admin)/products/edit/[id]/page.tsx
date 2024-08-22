"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { SelectProduct } from '@/db/schema/product/products';

const EditProductPage: React.FC = () => {
    const { id } = useParams();
    const router = useRouter();
    const productId = Array.isArray(id) ? id[0] : id;
    const [product, setProduct] = useState<SelectProduct | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        typeValuePairs: {} as Record<string, string>,
        firstName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: '',
        country: '',
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/GetProductContent/${productId}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch product: ${response.statusText}`);
                }
                const data: SelectProduct = await response.json();
                setProduct(data);

                setFormData({
                    title: data.title ?? '',
                    description: data.description ?? '',
                    category: data.category ?? '',
                    // Explicitly type-casting typeValuePairs as Record<string, string>
                    typeValuePairs: data.typeValuePairs as Record<string, string>,
                    firstName: data.firstName ?? '',
                    companyName: data.companyName ?? '',
                    email: data.email ?? '',
                    phoneNumber: data.phoneNumber ?? '',
                    city: data.city ?? '',
                    state: data.state ?? '',
                    country: data.country ?? '',
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log('Form submitted with data:', formData); // Debugging: Log the form data

        try {
            const response = await fetch(`/api/UpdateProduct/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: parseInt(productId), ...formData }),
            });

            console.log('Response status:', response.status); // Debugging: Log the response status

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            console.log('Product updated successfully'); // Debugging: Confirm the update was successful

            router.push('/admin/products/list');
        } catch (err) {
            console.error('Error occurred:', err); // Debugging: Log the error
            alert('Failed to update product');
        }
    };


    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-8">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input fields for formData */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="typeValuePairs" className="block text-sm font-medium text-gray-700">Type Value Pairs (JSON)</label>
                    <textarea
                        id="typeValuePairs"
                        name="typeValuePairs"
                        value={JSON.stringify(formData.typeValuePairs)}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>


                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProductPage;
