import NewProducts from "@/components/product/NewProduct";
import ProductHero from "@/components/product/ProductHero";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// app/product/page.tsx (or any other product-related pages)
export default function ProductPage() {
  return (
    <div>
      {/* <ProductHero /> */}
      <NewProducts />
      {/* Other product page content */}
    </div>
  );
}