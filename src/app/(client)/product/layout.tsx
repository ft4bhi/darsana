// app/product/layout.tsx
import HeaderMain from "@/components/product/HeaderMain";
import "./globals.css";
import HeaderTop from "@/components/product/HeaderTop";
import NavElement from "@/components/product/NavElement";
import Hero from "@/components/product/Hero";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <HeaderTop /> */}
      <HeaderMain />
      {/* <NavElement /> */}
      <Hero />
      {children}
    </>
  );
}