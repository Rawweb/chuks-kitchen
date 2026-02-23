import { Link } from 'react-router-dom';
import { HandPlatter, Handshake, Truck } from 'lucide-react';
import signInImage from '../../assets/sign-in.png';
import smallSignInImage from '../../assets/sign-in-s.png';

const highlights = [
  { icon: HandPlatter, text: 'Freshly Prepared' },
  { icon: Handshake, text: 'Support Local Business' },
  { icon: Truck, text: 'Fast & Reliable Delivery' },
];

const Welcome = () => {
  return (
    <section className='min-h-screen bg-white'>
      <div className='grid md:grid-cols-[48%_52%]'>
        {/* Left image panel */}
        <div className='relative h-72 md:h-auto p-6 md:p-0'>
          <img
            src={signInImage}
            alt='Family enjoying Nigerian food together'
            className='w-full h-full object-cover hidden md:block'
          />
          <img
            src={smallSignInImage}
            alt='Chicken plate'
            className='h-full w-full object-cover md:hidden'
          />
        </div>

        {/* Right content panel */}
        <div className='px-6 py-6 md:px-10 md:py-8 lg:px-14 lg:py-10 flex flex-col mx-auto'>
          <Link
            to='/sign-in'
            className='border w-fit border-primary-blue mb-10 text-primary-blue px-8 py-2 rounded-md text-sm hover:bg-primary-blue hover:text-white transition self-end md:hidden'
          >
            Sign In
          </Link>
          {/* Top actions */}
          <div className='flex items-center justify-center md:justify-between'>
            {/* Clickable logo to go home */}
            <Link
              to='/'
              className='font-island text-[34px] text-primary-orange leading-none'
            >
              Chuks Kitchen
            </Link>

            <Link
              to='/sign-in'
              className='border border-primary-blue text-primary-blue px-8 py-2 rounded-md text-sm hover:bg-primary-blue hover:text-white transition hidden md:block'
            >
              Sign In
            </Link>
          </div>

          {/* Middle content */}
          <div className='mt-8 md:mt-30 max-w-xl'>
            <h1 className='text-3xl md:text-4xl font-bold text-charcoal leading-tight'>
              Your Authentic Taste of Nigeria
            </h1>

            <p className='mt-4 text-sm md:text-base text-dark-gray leading-relaxed'>
              Experience homemade flavors delivered fresh to your desk
              or home. We bring the rich culinary heritage of Nigeria
              right to your doorstep.
            </p>

            <div className='mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 w-full'>
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className='flex items-center gap-3 text-sm text-charcoal bg-soft-gray md:bg-transparent px-4 py-2 rounded-lg'
                  >
                    <span className='h-8 w-8 rounded-lg bg-light-orange text-primary-orange flex items-center justify-center'>
                      <Icon size={16} />
                    </span>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className='mt-10 space-y-6'>
              <Link
                to='/sign-up'
                className='block w-full rounded-md bg-primary-orange px-4 py-3 text-center font-medium text-white hover:opacity-90 transition'
              >
                Start Your Order
              </Link>

              {/* No link destination by request */}
              <button
                type='button'
                className='w-full rounded-md border border-primary-blue px-4 py-3 text-center font-medium text-primary-blue'
              >
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Bottom legal text (no links by request) */}
          <div className='pt-24 text-xs text-dark-gray flex mx-auto flex-wrap items-center gap-3'>
            <span>&copy; 2024 Chuks Kitchen.</span>
            <span className='text-primary-blue hover:text-soft-blue cursor-pointer'>
              Privacy Policy
            </span>
            <span className='text-primary-blue hover:text-soft-blue cursor-pointer'>
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
