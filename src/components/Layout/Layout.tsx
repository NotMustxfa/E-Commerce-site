import React from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  cartItemCount: number;
}

export const Layout: React.FC<LayoutProps> = ({ cartItemCount }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header cartItemCount={cartItemCount} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2025 FakeStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};