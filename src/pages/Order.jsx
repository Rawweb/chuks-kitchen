import { CreditCard, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const orderSummary = [
  { label: 'Subtotal', extra: '₦9,200' },
  { label: 'Delivery Fee', extra: '₦500' },
  { label: 'Service Fee', extra: '₦200' },
  { label: 'Tax', extra: '₦0' },
];

const Order = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('delivery');

  return (
    <section className='min-h-screen flex items-center justify-center px-4 pt-30 md:pt-0 pb-8 md:pb-0'>
      <div className='relative w-full max-w-lg bg-white rounded-sm p-4 sm:p-6 shadow-md'>
        {/* Top-right close button */}
        <button
          type='button'
          onClick={() => navigate(-1)}
          className='absolute top-8 right-6 bg-black px-1 py-0.5 rounded-md text-white hover:opacity-70 transition'
          aria-label='Close order summary'
        >
          <X size={18} />
        </button>

        <h1 className='text-xl md:text-2xl font-bold'>
          Order Summary
        </h1>

        <div className='my-4 border-t border-muted-gray' />

        <h2 className='font-semibold'>Add a promo code</h2>
        <div className='mt-3 flex items-stretch gap-3 w-full'>
          <input
            type='text'
            placeholder='Enter Code here'
            className='flex-1 min-w-0 border-muted-gray rounded-md px-3 py-2 outline-none border-2 focus:border-primary-orange'
          />

          <button
            type='button'
            className='px-4 bg-primary-orange hover:bg-soft-orange transition-colors text-white rounded-md whitespace-nowrap'
          >
            Add
          </button>
        </div>

        <div className='mt-8 space-y-3'>
          {orderSummary.map((item) => (
            <div
              key={item.label}
              className='flex items-center justify-between text-dark-gray'
            >
              <span>{item.label}</span>
              <span>{item.extra}</span>
            </div>
          ))}
        </div>

        <div className='my-4 border-t border-muted-gray' />

        <div className='flex items-center justify-between'>
          <p className='text-lg font-bold'>Total</p>
          <p className='text-lg font-bold'>&#8358;9,900</p>
        </div>

        <div className='mt-4 grid grid-cols-2 overflow-hidden rounded-md'>
          <button
            onClick={() => setActiveTab('delivery')}
            type='button'
            className={`transition-colors text-white py-3 ${activeTab === 'delivery' ? 'bg-primary-orange' : 'bg-muted-gray hover:bg-dark-gray'}`}
          >
            Delivery
          </button>
          <button
            onClick={() => setActiveTab('pick-up')}
            type='button'
            className={`transition-colors text-white py-3 ${activeTab === 'pick-up' ? 'bg-primary-orange' : 'bg-muted-gray hover:bg-dark-gray'}`}
          >
            Pick up
          </button>
        </div>

        <h3 className='mt-5 text-lg font-semibold'>
          Special Instruction for restaurants
        </h3>

        <textarea
          rows={4}
          placeholder='E.g no onion, food is too spicy, food is too hot food is tasty'
          className='mt-2 w-full resize-none bg-white border border-muted-gray rounded-md p-3 text-base text-charcoal outline-none'
        />

        <Link
          to='/payment'
          className='inline-flex items-center gap-2 mt-5 w-full justify-center bg-primary-orange hover:bg-soft-orange py-4 text-white rounded-md shadow-md'
        >
          <CreditCard size={20} />
          Proceed to checkout
        </Link>
      </div>
    </section>
  );
};

export default Order;
