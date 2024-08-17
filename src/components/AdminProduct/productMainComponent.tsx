"use client";
import React, { useState } from 'react';

interface ProductProps {
    params: { productSlug: string };
    title: string;
    type: string;
    material: string;
    design: string;
    customization: string;
    protection: string;
    warranty: string;
    model: string;
    style: string;
    certificate: string;
    size: string;
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
    model,
    style,
    certificate,
    size,
    supplierName,
    supplierAddress,
    supplierContact,
    supplierEmail,
    description,
    mainImage,
    thumbnails,
}) => {
    const [currentImage, setCurrentImage] = useState(mainImage);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex flex-col w-full mx-auto p-5">
            <div className="flex mb-5">
                <div className="w-1/2 pr-4">
                    <img
                        src={currentImage}
                        alt="Product Image"
                        className="w-full object-cover mb-2"
                    />
                    <div className="flex gap-2 mt-2">
                        {thumbnails.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-12 h-12 object-cover cursor-pointer"
                                onClick={() => setCurrentImage(src)}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-1/2 pl-4">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <div className="mb-4">
                        <span className="font-bold">Availability: </span>
                        <span className="text-green-500">In stock</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="mr-2">Quantity:</span>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                            className="border border-gray-300 px-2 py-1 w-16 mr-2"
                            min="1"
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 rounded">
                            Add to Cart
                        </button>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <button className="border border-gray-300 px-4 py-2 flex items-center">
                            <span className="mr-2">☆</span> Add to Wish List
                        </button>
                        <button className="border border-gray-300 px-4 py-2 flex items-center">
                            <span className="mr-2">⇄</span> Add to Compare
                        </button>
                    </div>
                    <div className="mb-5">
                        <table className="w-full border-collapse">
                            <tbody>
                                {[
                                    { label: "Type", value: type },
                                    { label: "Material", value: material },
                                    { label: "Design", value: design },
                                    { label: "Customization", value: customization },
                                    { label: "Protection", value: protection },
                                    { label: "Warranty", value: warranty },
                                    { label: "Model", value: model },
                                    { label: "Style", value: style },
                                    { label: "Certificate", value: certificate },
                                    { label: "Size", value: size },
                                ].map(({ label, value }) => (
                                    <tr key={label}>
                                        <td className="p-2 border-b border-gray-300">{label}</td>
                                        <td className="p-2 border-b border-gray-300">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="text-4xl font-bold text-blue-500">R</div>
                        <div>
                            <h3 className="text-lg font-bold">{supplierName}</h3>
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