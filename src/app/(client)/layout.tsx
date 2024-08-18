// app/(client)/layout.tsx
import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface LayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;
