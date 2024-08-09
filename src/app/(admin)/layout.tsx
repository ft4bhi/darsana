import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import TopBar from "@/components/admin/TopBar";
import DashboardContent from "@/components/admin/DashboardContent";
import Sidebar from "@/components/admin/SideBar";

// Import necessary components if needed
// e.g., import AdminNavbar from "@/components/adminNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin panel layout",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <TopBar />

          </div>
        </div>
      </body>
    </html>
  );
}
