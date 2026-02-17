import exploreImage from '../assets/explore.png';

const ExploreHero = ({ breadcrumbItems = [] }) => {
  return (
    <div className='relative'>
      <div className='relative overflow-hidden'>
        {/* Background Image */}
        <img
          src={exploreImage}
          alt='New menu additions'
          className='w-full h-100 sm:h-125 object-cover'
        />

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-charcoal/50' />

        {/* Text Content */}
        <div className='absolute inset-0 container flex items-center'>
          <div className='max-w-2xl text-white space-y-4'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight'>
              Chuks Kitchen
            </h1>

            <p className='max-w-lg text-sm md:text-base lg:text-lg text-gray-100'>
              Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreHero;
