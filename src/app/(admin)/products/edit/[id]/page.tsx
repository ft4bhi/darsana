//src\app\(admin)\products\edit\[id]\page.tsx

"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { SelectProduct } from '@/db/schema/product/product';

const EditProductPage: React.FC = () => {
    const { id } = useParams();
    const router = useRouter();
    const productId = Array.isArray(id) ? id[0] : id;
    const [product, setProduct] = useState<SelectProduct | null>(null);
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

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/ProductApi/GetProductContent/${productId}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch product: ${response.statusText}`);
                }
                const data: SelectProduct = await response.json();
                setProduct(data);

                setFormData({
                    title: data.title ?? '',
                    description: data.description ?? '',
                    category: data.category ?? '',
                    // Convert typeValuePairs to string if it's not already
                    typeValuePairs: typeof data.typeValuePairs === 'string'
                        ? data.typeValuePairs
                        : JSON.stringify(data.typeValuePairs ?? ''),
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


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/ProductApi/UpdateProduct/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: parseInt(productId), ...formData }),
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            console.log('Product updated successfully');
            router.push('/products/list');
        } catch (err) {
            console.error('Error occurred:', err);
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
        <form onSubmit={handleSubmit} className="space-y-4">
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

            <div>
                <label htmlFor="typeValuePairs" className="block text-sm font-medium text-gray-700">Type Value Pairs (JSON string)</label>
                <textarea
                    id="typeValuePairs"
                    name="typeValuePairs"
                    value={formData.typeValuePairs}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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

export default EditProductPage;
