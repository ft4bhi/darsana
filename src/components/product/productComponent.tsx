"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface ProductProps {
    params: { productSlug: string };
    title: string;
    type: string;
    material: string;
    design: string;
    customization: string;
    protection: string;
    warranty: string;

    supplierName: string;
    supplierAddress: string;
    supplierContact: string;
    supplierEmail: string;
    description: string;
    mainImage: string;
    thumbnails: string[];
}

const ProductComponent: React.FC<ProductProps> = ({
    params,
    title,
    type,
    material,
    design,
    customization,
    protection,
    warranty,

    supplierName,
    supplierAddress,
    supplierContact,
    supplierEmail,
    description,
    mainImage,
    thumbnails,
}) => {
    const [currentImage, setCurrentImage] = useState(mainImage);

    return (
        <div className="flex flex-col w-full max-w-5xl mx-auto p-5">
            <div className="flex mb-5">
                <div className="w-1/2 pr-4">
                    <Image
                        src={mainImage}
                        alt="Product Image"
                        width={400}
                        height={400}
                        className="w-full object-cover mb-2"
                    />
                    <div className="flex gap-2 mt-2">
                        {thumbnails.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                width={50}
                                height={50}
                                className="w-12 h-12 object-cover"
                            />
                        ))}
                    </div>
                </div>
                <div className="w-1/2 pl-4">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <div className="mb-4">
                        <span className="font-bold">Price: </span>
                        <span>Negotiable</span>
                    </div>
                    <table className="w-full border-collapse mb-4">
                        <tbody>
                            {[
                                { label: "Type", value: type },
                                { label: "Material", value: material },
                                { label: "Design", value: design },
                                { label: "Customization", value: customization },
                                { label: "Protection", value: protection },
                                { label: "Warranty", value: warranty },
                            ].map(({ label, value }) => (
                                <tr key={label} className="border-b border-gray-200">
                                    <td className="py-2 pr-4 font-semibold">{label}</td>
                                    <td className="py-2">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg">
                        <div className="text-4xl font-bold text-blue-500">R</div>
                        <div>
                            <h3 className="font-bold">{supplierName}</h3>
                            <p className="text-sm">{supplierAddress}</p>
                            <p className="text-sm">{supplierContact}</p>
                            <p className="text-sm">{supplierEmail}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 pt-4">
                <h3 className="text-lg font-bold mb-2">Description</h3>
                <p className="text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default ProductComponent;
