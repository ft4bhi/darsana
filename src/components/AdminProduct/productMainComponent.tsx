"use client";
import React, { useState } from 'react';

interface ProductProps {
    price: string;
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
}

const ProductComponent: React.FC<ProductProps> = ({
    price,
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
}) => {
    const [mainImage, setMainImage] = useState("https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    const [quantity, setQuantity] = useState(1);

    const thumbnails = [
        "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    return (
        <div className="flex flex-col w-full mx-auto p-5">
            <div className="flex mb-5">
                <div className="w-1/2 pr-4">
                    <img
                        src={mainImage}
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
                                onClick={() => setMainImage(src)}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-1/2 pl-4">
                    <h2 className="text-2xl font-bold mb-4">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>
                    <div className="mb-4">
                        <span className="font-bold">Your Price: </span>
                        <span className="text-red-500 font-bold">{price}</span>
                    </div>
                    <div className="mb-4">
                        <span className="font-bold">Part Number: </span>
                        <span>7</span>
                    </div>
                    <div className="mb-4">
                        <span className="font-bold">Availability: </span>
                        <span className="text-green-500">In stock</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="mr-2">Quantity:</span>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="border border-gray-300 px-2 py-1 w-16 mr-2"
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
                                <tr>
                                    <td className="p-2 border-b border-gray-300">Type</td>
                                    <td className="p-2 border-b border-gray-300">{type}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border-b border-gray-300">Material</td>
                                    <td className="p-2 border-b border-gray-300">{material}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border-b border-gray-300">Design</td>
                                    <td className="p-2 border-b border-gray-300">{design}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border-b border-gray-300">Customization</td>
                                    <td className="p-2 border-b border-gray-300">{customization}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border-b border-gray-300">Protection</td>
                                    <td className="p-2 border-b border-gray-300">{protection}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border-b border-gray-300">Warranty</td>
                                    <td className="p-2 border-b border-gray-300">{warranty}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border-b border-gray-300">Model</td>
                                    <td className="p-2 border-b border-gray-300">{model}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border-b border-gray-300">Style</td>
                                    <td className="p-2 border-b border-gray-300">{style}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border-b border-gray-300">Certificate</td>
                                    <td className="p-2 border-b border-gray-300">{certificate}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border-b border-gray-300">Size</td>
                                    <td className="p-2 border-b border-gray-300">{size}</td>
                                </tr>
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



