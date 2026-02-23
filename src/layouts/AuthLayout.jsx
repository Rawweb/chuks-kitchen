import React from 'react';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const { pathname } = useLocation();
  const isWelcomePage = pathname === '/welcome';

  return (
    <div className='min-h-screen flex flex-col bg-soft-gray text-charcoal'>
      {/* Main content */}
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
