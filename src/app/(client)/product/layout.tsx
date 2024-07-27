// app/product/layout.tsx
import HeaderMain from "@/components/product/HeaderMain";
import "./globals.css";




export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <HeaderTop /> */}
      <HeaderMain />



      {children}
    </>
  );
}