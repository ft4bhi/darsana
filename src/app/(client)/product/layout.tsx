// app/product/layout.tsx
import HeaderMain from "@/components/product/HeaderMain";
import "./globals.css";

import Hero from "@/components/product/Hero";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewProducts from "@/components/product/NewProduct";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <HeaderTop /> */}
      <HeaderMain />

      <Hero />
      <NewProducts />
      {children}
    </>
  );
}