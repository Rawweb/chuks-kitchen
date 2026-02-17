import { useState } from 'react';
import heroImage from '../assets/hero.png';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [searchData, setSearchData] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchClick = () => {
    setSearchData('');
  };

  return (
    <div className='relative'>
      <div className='relative overflow-hidden'>
        {/* Background Image */}
        <img
          src={heroImage}
          alt='New menu additions'
          className='w-full h-125 sm:h-150 lg:h-187.5 object-cover'
        />

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-charcoal/50' />

        {/* Text Content */}
        <div className='absolute inset-0 container flex items-center'>
          <div className='max-w-2xl text-white space-y-4'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight'>
              The Heart of Nigerian Home Cooking
            </h1>

            <p className='max-w-lg text-sm md:text-base lg:text-lg text-gray-100'>
              Handcrafted with passion, delivered with care.
            </p>

            <Link
              to='/welcome'
              className='bg-primary-orange rounded-md px-5 py-2 text-sm md:text-base text-white font-medium hover:bg-soft-orange transition-colors inline-block'
            >
              Discover what's new
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className='absolute left-0 right-0 bottom-0 translate-y-1/2 container'>
        <form
          onSubmit={handleSearchSubmit}
          className='max-w-5xl mx-auto bg-white rounded-lg shadow-lg px-4 md:px-5 py-3 flex items-center gap-3'
        >
          {/* Icon */}
          <Search className='text-gray-500' size={24} />

          {/* Input */}
          <input
            type='text'
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            placeholder='What are you craving for today?'
            className='w-full bg-transparent outline-none text-sm md:text-2xl font-medium text-charcoal placeholder:text-dark-gray'
          />

          {/* Optional Search Button */}
          <button
            onClick={handleSearchClick}
            className='hidden md:block bg-primary-orange text-white px-6 py-2 rounded-lg font-medium hover:bg-soft-orange transition-colors'
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
