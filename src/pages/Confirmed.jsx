import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Confirmed = () => {
  return (
    <section className='min-h-screen flex items-center justify-center px-4'>
      {/* Main confirmation card */}
      <div className='w-full max-w-lg bg-white rounded-sm p-6 sm:p-8 shadow-md text-center'>
        {/* Success icon */}
        <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-700 text-white'>
          <Check size={40} />
        </div>

        <p className='mt-4 text-lg font-semibold text-charcoal'>
          Order Placed Successfully!
        </p>
        <p className='mt-1 text-sm text-dark-gray'>
          Your delicious Chuks Kitchen meal is on its way!
        </p>

        {/* Soft divider dot like your design */}
        <div className='mx-auto mt-8 h-4 w-4 rounded-full bg-green-100' />

        <h2 className='mt-10 text-2xl font-bold text-charcoal'>
          Order #123RGR231567Y Confirmed
        </h2>

        {/* Track order button goes to /account */}
        <Link
          to='/account'
          className='mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary-orange py-3 text-sm font-semibold text-white transition-colors hover:bg-soft-orange'
        >
          Track Order
        </Link>

        <button
          type='button'
          className='mt-4 text-sm text-muted-gray hover:text-dark-gray transition-colors'
        >
          Generate Receipt
        </button>

        <button
          type='button'
          className='mt-4 block w-full text-center text-primary-blue hover:text-soft-blue transition-colors'
        >
          Need help with your order?
        </button>
      </div>
    </section>
  );
};

export default Confirmed;
