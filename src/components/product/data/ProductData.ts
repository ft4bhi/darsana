// components/product/data/ProductData.ts
import productImage1 from '@/assets/product/productpage01.png';
 // Another thumbnail example
import { StaticImageData } from 'next/image';

export interface Product {
    title: string;
    imageUrl: StaticImageData;
    description: string;
    mainImage: StaticImageData;
    thumbnails: StaticImageData[];
}

export const products: Product[] = [
    {
        title: "Classic Leather Watch",
        imageUrl: productImage1,
        description: "A timeless leather watch with a classic design, perfect for any occasion.",
        mainImage: productImage1,
        thumbnails: [productImage1, productImage1, productImage1], // Add actual thumbnails
    },
    {
        title: "Wireless Bluetooth Headphones",
        imageUrl: productImage1, // Placeholder, use actual image
        description: "High-quality wireless Bluetooth headphones with noise-cancellation and long battery life.",
        mainImage: productImage1,
        thumbnails: [productImage1, productImage1, productImage1], // Add actual thumbnails
    },
    {
        title: "Modern Office Desk",
        imageUrl: productImage1, // Placeholder, use actual image
        description: "Sleek and modern office desk with ample storage and a minimalist design.",
        mainImage: productImage1,
        thumbnails: [productImage1, productImage1, productImage1], // Add actual thumbnails
    },
    {
        title: "Eco-Friendly Water Bottle",
        imageUrl: productImage1, // Placeholder, use actual image
        description: "Durable and eco-friendly water bottle made from sustainable materials.",
        mainImage: productImage1,
        thumbnails: [productImage1, productImage1, productImage1], // Add actual thumbnails
    },
    {
        title: "Ergonomic Office Chair",
        imageUrl: productImage1, // Placeholder, use actual image
        description: "Ergonomic office chair designed for maximum comfort and support during long work hours.",
        mainImage: productImage1,
        thumbnails: [productImage1, productImage1, productImage1], // Add actual thumbnails
    },
];
