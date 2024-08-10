import React from 'react';

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
    const thumbnails = [
        "https://www.freepngimg.com/thumb/t-shirt/11336-2-t-shirt-png-image-download-free.png",
        "https://www.freepngimg.com/thumb/t-shirt/11336-2-t-shirt-png-image-download-free.png",
        "https://www.freepngimg.com/thumb/t-shirt/11336-2-t-shirt-png-image-download-free.png",
        "https://www.freepngimg.com/thumb/t-shirt/11336-2-t-shirt-png-image-download-free.png",
        "https://www.freepngimg.com/thumb/t-shirt/11336-2-t-shirt-png-image-download-free.png",
        "https://www.freepngimg.com/thumb/t-shirt/11336-2-t-shirt-png-image-download-free.png"
    ];

    return (
        <div className="flex flex-col w-full mx-auto border border-gray-300 p-5 rounded-md">
            <div className="flex justify-between items-center mb-5">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold mb-2">Mens Long Sleeve T-shirt Cotton Base</h2>
                    <h2 className="text-xl font-bold">Layer Slim Muscle</h2>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="font-bold">Price:</span>
                        <span>{price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold">Type:</span>
                        <span>{type}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold">Material:</span>
                        <span>{material}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold">Design:</span>
                        <span>{design}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold">Customization:</span>
                        <span>{customization}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold">Protection:</span>
                        <span>{protection}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold">Warranty:</span>
                        <span>{warranty}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mb-5">
                <img
                    src="https://www.freepngimg.com/thumb/t-shirt/11336-2-t-shirt-png-image-download-free.png"
                    alt="Product Image"
                    className="w-72 h-72 object-cover rounded-md"
                />
                <div className="flex gap-2 mt-2">
                    {thumbnails.map((src, index) => (
                        <img key={index} src={src} alt={`Thumbnail ${index + 1}`} className="w-12 h-12 object-cover rounded-md" />
                    ))}
                </div>
            </div>
            <div className="mb-5">
                <h3 className="text-lg font-bold mb-2">Description</h3>
                <p className="text-sm leading-relaxed">{description}</p>
            </div>
            <div className="mb-5">
                <table className="w-full border-collapse">
                    <tbody>
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
            <div className="flex justify-between items-center">
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
    );
};

export default ProductComponent;
