// app/(admin)/layout.tsx
import React, { ReactNode } from 'react';
import TopBar from '@/components/admin/TopBar';
import Sidebar from '@/components/admin/SideBar';

interface LayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
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

export default AdminLayout;
