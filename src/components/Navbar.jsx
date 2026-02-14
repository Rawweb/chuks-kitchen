import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'My Orders', path: '/my-orders' },
  { label: 'Account', path: '/account' },
];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 w-full bg-white shadow-lg z-50">
      <div className="container flex items-center justify-between h-24 font-medium">
        {/* Logo */}
        <h1 className="font-island text-[40px] text-primary-orange cursor-pointer">
          Chuks Kitchen
        </h1>

        {/* Desktop - links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-10 ">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `p-2 hover:text-soft-orange transition-colors  ${isActive ? 'text-primary-orange' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Button */}
        <div className="flex gap-3">
          <Link
            to="/sign-in"
            className="hidden md:block border border-muted-gray hover:text-white hover:bg-primary-orange transition-all duration-150 px-4 py-2 rounded-lg"
          >
            Sign In
          </Link>

          <Link
            to="/sign-in"
            className="hidden md:block bg-primary-orange hover:bg-soft-orange transition-all duration-150 px-4 py-2 rounded-lg text-white"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
         ease-in-out ${menuOpen ? 'max-h-150 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}
      >
        <div className="border-t-2 border-soft-gray">
          <div className="flex flex-col gap-6 p-6 ">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `p-2 transition-colors ${isActive ? 'text-primary-orange' : 'hover:text-primary-orange'}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Button */}
            <Link
              to="/sign-in"
              className="text-center border border-muted-gray hover:text-white hover:bg-primary-orange transition-all duration-150 px-6 py-2 rounded-lg"
            >
              Sign In
            </Link>

            <Link
              to="/sign-up"
              className="text-center bg-primary-orange hover:bg-soft-orange transition-all duration-150 px-6 py-2 rounded-lg text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
