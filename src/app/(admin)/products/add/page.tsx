// page.tsx
import React from 'react';
import AddProductForm from '@/components/AdminProduct/AddProductForm';



export default function AddProductPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
            <AddProductForm />
        </div>
    );
}