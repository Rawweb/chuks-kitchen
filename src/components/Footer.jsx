import { Link, NavLink } from 'react-router-dom';
import footerImage from '../assets/footer.png';

const footerLinks = {
  pages: [
    { label: 'Home', path: '/' },
    { label: 'Explore', path: '/explore' },
    { label: 'My Order', path: '/my-order' },
    { label: 'Account', path: '/account' },
    { label: 'Contact', path: '/contact' },
  ],

  social: [
    { label: 'Facebook', path: '#' },
    { label: 'Twitter', path: '#' },
    { label: 'LinkedIn', path: '#' },
    { label: 'Instagram', path: '#' },
  ],
};

const Footer = ({ showImage }) => {
  return (
    <footer>
      {/* TOp Image */}

      {showImage && (
        <div className="relative overflow-hidden">
          <img
            src={footerImage}
            alt="New menu additions"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />

          <div className="absolute inset-0 container flex items-center">
            <div className="max-w-2xl text-white space-y-3 md:space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                Introducing Our New Menu Additions!
              </h1>
              <p className=" max-w-lg text-sm md:text-base text-gray-100">
                Explore exciting new dishes, crafted with the freshest ingredients and authentic
                Nigerian flavors. Limited time offer!
              </p>
              <button className="bg-primary-orange rounded-md px-5 py-2 text-sm md:text-base text-white font-medium hover:bg-soft-orange transition-colors">
                Discover what's new
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Contents */}
      <div className="bg-brown text-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
          {/* Logo */}
          <div className="flex flex-col gap-2">
            <h1 className="font-island text-4xl text-primary-orange cursor-pointer">
              Chuks Kitchen
            </h1>
            <p className="tracking-widest text-lg">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion
              and care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl md:text-2xl font-medium">Quick Links</h1>
            <div className="flex flex-col gap-2 text-white/40">
              {footerLinks.pages.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:text-white transition-colors ${isActive ? 'text-white' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl md:text-2xl font-medium">Contact Us</h1>
            <div className="flex flex-col gap-2 text-white/40">
              <p>+234 801 234 5678</p>
              <p>hello@chukskitchen.com</p>
              <p>123 Taste Blvd, Lagos, Nigeriat</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl md:text-2xl font-medium">Social Links</h1>

            <div className="flex flex-col gap-2 text-white/40">
              {footerLinks.social.map((item, index) => (
                <Link key={index} to={item.path} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="container text-sm text-white/40 pb-20">
          © {new Date().getFullYear()} Lif Media. All righs reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
