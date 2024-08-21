// src\components\product\data\ProductData.ts

import productImage1 from '@/assets/product/productpage01.png';
import { StaticImageData } from 'next/image';

export interface Product {
    id: number;
    title: string;
    imageUrl: StaticImageData;
    description: string;
    mainImage: StaticImageData;
    thumbnails: StaticImageData[];
    link: string;

    // price: string;
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

    model: string;          // New property
    style: string;          // New property
    // certificate: string;    // New property
    size: string;           // New property
}

export const products: Product[] = [
    {
        id: 1,
        title: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
        imageUrl: productImage1,
        description: "A comfortable and stylish long sleeve T-shirt perfect for everyday wear.",
        mainImage: productImage1,
        thumbnails: [productImage1, productImage1, productImage1],
        link: "mens-long-sleeve-tshirt",

        // price: "Negotiable",
        type: "Classic shoes",
        material: "Plastic material",
        design: "Modern rise",
        customization: "Customized logo and design custom packages",
        protection: "Refund Policy",
        warranty: "2 years full warranty",
        supplierName: "Gunjold Trading LLC",
        supplierAddress: "Raalkkad, Kerala, India",
        supplierContact: "+91 9999999999",
        supplierEmail: "ShadilRayan@gmail.com",

        // New properties
        model: "2024 Model",
        style: "Casual",
        // certificate: "ISO 9001 Certified",
        size: "Medium"
    },
    // Add other products similarly
];

