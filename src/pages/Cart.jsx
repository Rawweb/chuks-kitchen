import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, X } from 'lucide-react';
import cartImageOne from '../assets/cart-1.png';
import cartImageTwo from '../assets/cart-2.png';
import cartImageThree from '../assets/cart-3.png';
import cartImageFour from '../assets/cart-4.png';

const initialCartItems = [
  {
    id: 1,
    name: 'Jollof Rice & Fried Chicken',
    note: 'With plantain, extra pepper sauce',
    price: '3,200',
    quantity: 1,
    image: cartImageOne,
  },
  {
    id: 2,
    name: 'Jollof Rice & Fried Chicken',
    note: 'With plantain, extra pepper sauce',
    price: '3,200',
    quantity: 1,
    image: cartImageTwo,
  },
  {
    id: 3,
    name: 'Jollof Rice & Fried Chicken',
    note: 'With plantain, extra pepper sauce',
    price: '3,200',
    quantity: 1,
    image: cartImageThree,
  },
  {
    id: 4,
    name: 'Jollof Rice & Fried Chicken',
    note: 'With plantain, extra pepper sauce',
    price: '3,200',
    quantity: 1,
    image: cartImageFour,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Increase cart item
  const increaseCount = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCartItems(updatedItems);
  };

  // Decrease cart Item
  const decreaseCount = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : 1,
        };
      }

      return item;
    });

    setCartItems(updatedItems);
  };

  //  Remove item from cart
  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <section className='py-32 px-4'>
      <div className='container mx-auto max-w-4xl bg-white rounded-sm p-4 sm:p-6 shadow-md'>
        <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>

        {/* Desktop View */}
        <div className='space-y-2 hidden md:block'>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className='border border-soft-gray p-2 sm:p-3 flex items-center gap-3 sm:gap-4'
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded'
              />

              {/* Title + Description */}
              <div className='flex-1 min-w-0'>
                <h2 className='text-base md:text-xl font-bold text-black'>
                  {item.name}
                </h2>
                <p className='text-xs md:text-base text-dark-gray'>
                  {item.note}
                </p>
              </div>

              {/* Increas and Decrease Button */}
              <div className='flex items-center gap-2 :gap-5 border px-2 py-1 rounded-md border-soft-gray'>
                <button
                  type='button'
                  onClick={() => decreaseCount(item.id)}
                  className='text-muted-gray hover:text-charcoal transition-colors bg-soft-gray p-1 rounded-md'
                  aria-label={`Decrease quantity for ${item.name}`}
                >
                  <Minus size={18} />
                </button>

                <span className='text-2xl font-bold'>
                  {item.quantity}
                </span>

                <button
                  type='button'
                  onClick={() => increaseCount(item.id)}
                  className='text-muted-gray hover:text-charcoal transition-colors bg-soft-gray p-1 rounded-md'
                  aria-label={`Increase quantity for ${item.name}`}
                >
                  <Plus size={18} />
                </button>
              </div>

              {/* Price + Button */}
              <div className='flex items-center gap-10'>
                <p className='text-primary-orange font-bold text-xs sm:text-lg w-20 sm:w-24 text-right'>
                  ₦{item.price}
                </p>

                <button
                  type='button'
                  onClick={() => removeItem(item.id)}
                  className='text-white transition-colors bg-primary-orange hover:bg-soft-orange p-1 rounded-md'
                  aria-label={`Remove ${item.name}`}
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className='space-y-4 md:hidden'>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className='border border-soft-gray p-3 flex items-center gap-4'
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className='w-26 h-30 object-cover rounded'
              />

              <div className='flex flex-col justify-between flex-1'>
                {/* Top Row: Title + Quantity */}
                <div className='flex justify-between items-start gap-4'>
                  {/* Title + Description */}
                  <div>
                    <h2 className='text-base font-bold text-black'>
                      {item.name}
                    </h2>
                    <p className='text-xs text-dark-gray'>
                      {item.note}
                    </p>
                  </div>
                </div>

                {/* Increase and Decrease Button */}
                <div className='flex items-center gap-3 mt-4'>
                  <button
                    type='button'
                    onClick={() => decreaseCount(item.id)}
                    className='text-muted-gray bg-soft-gray p-1 rounded-md'
                    aria-label={`Increase quantity for ${item.name}`}
                  >
                    <Minus size={14} />
                  </button>

                  <span className='text-lg font-bold'>
                    {item.quantity}
                  </span>

                  <button
                    type='button'
                    onClick={() => increaseCount(item.id)}
                    className='text-muted-gray bg-soft-gray p-1 rounded-md'
                    aria-label={`Decrease quantity for ${item.name}`}
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Bottom Row: Price + Remove */}
                <div className='flex items-center mt-4 justify-between'>
                  <p className='text-primary-orange font-bold text-lg'>
                    ₦{item.price}
                  </p>

                  <button
                    type='button'
                    onClick={() => removeItem(item.id)}
                    className='text-white bg-primary-orange p-1 rounded-md'
                    aria-label={`Remove ${item.name}`}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          to='/explore'
          className='mt-4 inline-flex items-center gap-2 text-primary-blue hover:text-soft-blue hover:underline text-sm'
        >
          <Plus size={14} />
          Add more items from Chuks Kitchen
        </Link>
      </div>
    </section>
  );
};

export default Cart;
