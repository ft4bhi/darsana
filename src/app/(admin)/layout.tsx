import React, { ReactNode } from 'react';
import TopBar from '@/components/admin/TopBar'; // Adjust the import path as needed
import Sidebar from '@/components/admin/SideBar'; // Adjust the import path as needed

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* TopBar */}
      <TopBar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 p-0 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
