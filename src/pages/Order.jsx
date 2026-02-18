const orderSummary = [
  { label: 'Subtotal', extra: '₦9,200' },
  { label: 'Delivery Fee', extra: '₦500' },
  { label: 'Service Fee', extra: '₦200' },
  { label: 'Tax', extra: '₦0' },
];

const Order = () => {
  return (
    <section className='min-h-screen flex items-center justify-center px-4 pt-24'>
      <div className='w-full max-w-lg bg-white rounded-sm p-4 sm:p-6 shadow-md'>
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
            Login
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
            type='button'
            className='bg-primary-orange hover:bg-soft-orange text-white py-3'
          >
            Delivery
          </button>
          <button
            type='button'
            className='bg-muted-gray text-white py-3 transition-colors'
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

        <button
          type='button'
          className='mt-5 w-full bg-primary-orange hover:bg-soft-orange transition-colors text-white rounded-md py-3'
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default Order;
