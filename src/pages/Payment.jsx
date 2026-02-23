import { X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const paymentOptions = ['Card', 'Bank', 'Transfer'];

const Payment = () => {
  const navigate = useNavigate();

  return (
    <section className='min-h-screen flex items-center justify-center px-4'>
      {/* Card container */}
      <div className='relative w-full max-w-lg bg-white rounded-sm p-4 sm:p-6 shadow-md'>
        {/* Top-right close button */}
        <button
          type='button'
          onClick={() => navigate(-1)}
          className='absolute top-5.5 right-4 md:top-7 md:right-6 bg-black px-1 py-0.5 rounded-md text-white hover:opacity-70 transition'
          aria-label='Close payment'
        >
          <X size={18} />
        </button>

        <h1 className='text-xl font-bold text-charcoal'>Payment</h1>

        <div className='my-3 border-t border-muted-gray' />

        {/* Payment method options */}
        <h2 className='text-sm font-semibold text-charcoal'>Pay With:</h2>
        <div className='mt-3 flex items-center gap-8 flex-wrap'>
          {paymentOptions.map((option, index) => (
            <label
              key={option}
              className='inline-flex items-center gap-2 text-xs text-dark-gray cursor-pointer'
            >
              <input
                type='radio'
                name='payment-method'
                defaultChecked={index === 0}
                className='h-3 w-3 accent-green-600'
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {/* Card number input */}
        <label className='mt-5 block text-xs font-medium text-charcoal'>
          Card Number
        </label>
        <input
          type='text'
          placeholder='1234 5678 9101 1121'
          className='mt-1 w-full border border-muted-gray rounded-sm px-3 py-2 text-xs outline-none focus:border-primary-orange'
        />

        {/* Expiration and CVV row */}
        <div className='mt-3 grid grid-cols-2 gap-3'>
          <div>
            <label className='block text-xs font-medium text-charcoal'>
              Expiration Date
            </label>
            <input
              type='text'
              placeholder='MM/YY'
              className='mt-1 w-full border border-muted-gray rounded-sm px-3 py-2 text-xs outline-none focus:border-primary-orange'
            />
          </div>

          <div>
            <label className='block text-xs font-medium text-charcoal'>
              CVV
            </label>
            <input
              type='text'
              placeholder='123'
              className='mt-1 w-full border border-muted-gray rounded-sm px-3 py-2 text-xs outline-none focus:border-primary-orange'
            />
          </div>
        </div>

        {/* Save card details */}
        <label className='mt-3 inline-flex items-center gap-2 text-[11px] text-muted-gray cursor-pointer'>
          <input type='checkbox' className='h-3 w-3' />
          <span>Save card details</span>
        </label>

        {/* Payment button */}
        <Link
          to='/confirmed'
          className='mt-4 inline-flex w-full items-center justify-center bg-primary-orange hover:bg-soft-orange transition-colors text-white rounded-md py-3 text-sm font-semibold'
        >
          Pay &#8358;0.00
        </Link>

        <p className='mt-4 text-[11px] leading-4 text-muted-gray'>
          Your personal data will be used to process your order,
          support your experience throughout this website, and for
          other purposes described in our privacy policy.
        </p>
      </div>
    </section>
  );
};

export default Payment;
