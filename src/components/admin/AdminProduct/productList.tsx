// src/components/admin/AdminProduct/productList.tsx
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
        <div className="product-container">
            <div className="product-info">
                <h2>Mens Long Sleeve T-shirt Cotton Base</h2>
                <h2>Layer Slim Muscle</h2>
                <div className="product-details">
                    <div>
                        <span>Price:</span>
                        <span>{price}</span>
                    </div>
                    <div>
                        <span>Type:</span>
                        <span>{type}</span>
                    </div>
                    <div>
                        <span>Material:</span>
                        <span>{material}</span>
                    </div>
                    <div>
                        <span>Design:</span>
                        <span>{design}</span>
                    </div>
                    <div>
                        <span>Customization:</span>
                        <span>{customization}</span>
                    </div>
                    <div>
                        <span>Protection:</span>
                        <span>{protection}</span>
                    </div>
                    <div>
                        <span>Warranty:</span>
                        <span>{warranty}</span>
                    </div>
                </div>
            </div>
            <div className="product-image">
                <img
                    src="https://www.freepngimg.com/thumb/t-shirt/11336-2-t-shirt-png-image-download-free.png"
                    alt="Product Image"
                />
                <div className="product-thumbnails">
                    {thumbnails.map((src, index) => (
                        <img key={index} src={src} alt={`Thumbnail ${index + 1}`} />
                    ))}
                </div>
            </div>
            <div className="product-description">
                <h3>Description</h3>
                <p>{description}</p>
            </div>
            <div className="product-details-table">
                <table>
                    <tbody>
                        <tr>
                            <td>Model</td>
                            <td>{model}</td>
                        </tr>
                        <tr>
                            <td>Style</td>
                            <td>{style}</td>
                        </tr>
                        <tr>
                            <td>Certificate</td>
                            <td>{certificate}</td>
                        </tr>
                        <tr>
                            <td>Size</td>
                            <td>{size}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="product-supplier">
                <div className="supplier-info">
                    <div className="supplier-logo">R</div>
                    <div>
                        <h3>{supplierName}</h3>
                        <p>{supplierAddress}</p>
                        <p>{supplierContact}</p>
                        <p>{supplierEmail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;
