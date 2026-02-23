const Account = () => {
  return (
    <section className='min-h-screen flex items-center justify-center px-4'>
      {/* Main card  */}
      <div className='w-full max-w-lg bg-white rounded-sm p-4 sm:p-6 shadow-md'>
        <h1 className='text-3xl font-bold text-charcoal'>Delivery Details</h1>

        <div className='my-4 border-t border-muted-gray' />

        {/* Saved address box */}
        <div className='border border-muted-gray rounded-sm p-3'>
          <div className='flex items-start justify-between gap-4'>
            <p className='text-xs text-charcoal leading-5'>
              Home: 123 Main Street, Victoria Island, Lagos
              <br />
              Apt 4B, Opposite Mega Plaza
            </p>

            <button type='button' className='text-xs text-primary-blue hover:text-soft-blue transition-colors whitespace-nowrap'>
              Change Address
            </button>
          </div>
        </div>

        {/* Delivery time */}
        <label className='mt-5 block md:text-xl font-semibold text-charcoal'>Delivery Time</label>
        <input
          type='text'
          defaultValue='ASAP(30-25)'
          className='mt-2 w-full border border-muted-gray rounded-sm px-3 py-3 text-sm outline-none focus:border-primary-orange'
        />

        {/* Delivery instruction */}
        <label className='mt-5 block md:text-xl font-semibold text-charcoal'>Delivery Instructions (Optional)</label>
        <textarea
          rows={2}
          defaultValue='E.g leave at the front of the door, knock twice....................'
          className='mt-2 w-full resize-none border border-muted-gray rounded-sm px-3 py-3 text-sm outline-none focus:border-primary-orange'
        />

        {/* Contact details */}
        <label className='mt-5 block md:text-xl font-semibold text-charcoal'>Contact Address</label>
        <input
          type='text'
          defaultValue='+234 801 234 5678'
          className='mt-2 w-full border border-muted-gray rounded-sm px-3 py-3 text-sm outline-none focus:border-primary-orange'
        />
      </div>
    </section>
  );
};

export default Account;
