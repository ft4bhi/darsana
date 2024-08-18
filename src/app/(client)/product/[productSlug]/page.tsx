import React from 'react';
import ProductComponent from '@/components/product/productComponent';
import { products } from '@/components/product/data/ProductData';

interface PageProps {
    params: { productSlug: string };
}

const ProductPage: React.FC<PageProps> = ({ params }) => {
    const { productSlug } = params;

    const product = products.find(p => p.link === productSlug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <ProductComponent
                params={params}
                title={product.title}
                type={product.type}
                material={product.material}
                design={product.design}
                customization={product.customization}
                protection={product.protection}
                warranty={product.warranty}
                // model={product.model || "Default Model"}          // Provide a default value if not available
                // style={product.style || "Default Style"}          // Provide a default value if not available
                // certificate={product.certificate || "No Certificate"} // Provide a default value if not available
                // size={product.size || "Standard Size"}            // Provide a default value if not available
                supplierName={product.supplierName}
                supplierAddress={product.supplierAddress}
                supplierContact={product.supplierContact}
                supplierEmail={product.supplierEmail}
                description={product.description}
                mainImage={product.mainImage.src}
                thumbnails={product.thumbnails.map(thumb => thumb.src)}
            />
        </div>
    );
};

export default ProductPage;
