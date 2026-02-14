import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UserLayout = () => {
  const location = useLocation();

  const showImage = location.pathname === '/';
  return (
    <div className="min-h-screen flex flex-col bg-soft-gray text-charcoal">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* footer */}
      <Footer showImage={showImage} />
    </div>
  );
};

export default UserLayout;
