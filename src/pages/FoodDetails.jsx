import {
  AlertCircle,
  Flame,
  ShieldCheck,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const extraSides = [
  { name: 'Fried Plantain', extra: '+N700' },
  { name: 'Coleslaw', extra: '+N500' },
  { name: 'Extra Pepper Sauce', extra: '+N300' },
];

const proteinOptions = [
  { name: 'Fried Chicken', extra: '(Default)' },
  { name: 'Grilled Fish', extra: '+N500' },
  { name: 'Beef', extra: '+N700' },
];

const FoodDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const food = state?.food || state;
  const options = food?.proteinOptions || proteinOptions;
  const [selectedProtein, setSelectedProtein] = useState('');
  const [selectedSides, setSelectedSides] = useState([]);

  useEffect(() => {
    setSelectedProtein(options[0]?.name || '');
    setSelectedSides([]);
  }, [food]);

  const handleToggleSide = (sideName) => {
    setSelectedSides((prev) => {
      if (prev.includes(sideName)) {
        return prev.filter((item) => item !== sideName);
      }

      return [...prev, sideName];
    });
  };

  if (!food) {
    return <p className='text-center mt-20'>Meal not found</p>;
  }

  return (
    <main className='container pt-24 '>
      <section className='grid grid-cols-1 lg:grid-cols-2 bg-soft-gray overflow-hidden gap-4'>
        {/* Food Image */}
        <div className='h-90 md:h-115 lg:h-full mt-5 md:mt-0'>
          <img
            src={food.image}
            alt={food.title}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Details Panel */}
        <div className='relative p-6 md:p-8 bg-white my-5'>
          <button
            type='button'
            onClick={() => navigate(-1)}
            className='absolute top-4 right-4 bg-black px-1 py-0.5 rounded-md text-white hover:opacity-70 transition'
            aria-label='Close details'
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className='pr-8'>
            <h1 className='text-2xl md:text-3xl font-bold text-charcoal'>
              {food.title}
            </h1>
            <p className='mt-2 text-xl font-bold text-primary-orange'>
              &#8358;{food.price}
            </p>
            <p className='mt-3 text-sm text-dark-gray leading-relaxed'>
              {food.description}
            </p>
          </div>

          {/* Highlights */}
          <div className='flex flex-wrap gap-4 text-xs text-dark-gray mt-5'>
            <span className='inline-flex items-center gap-1.5'>
              <Flame size={14} className='text-primary-orange' />
              Mildly spicy
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <ShieldCheck
                size={14}
                className='text-primary-orange'
              />
              Vegetarian option available
            </span>
            <span className='inline-flex items-center gap-1.5 text-primary-blue'>
              <AlertCircle
                size={14}
                className='text-primary-orange'
              />
              View Allergies
            </span>
          </div>

          {/* Protein Options */}
          <div className='mt-6'>
            <h2 className='text-xl font-semibold text-charcoal'>
              Choose Your Protein
            </h2>

            <div className='mt-3 space-y-2'>
              {options.map((protein) => (
                <label
                  key={protein.name}
                  htmlFor={protein.name}
                  className='flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2.5 bg-white cursor-pointer'
                >
                  <span className='inline-flex items-center gap-2 text-sm text-charcoal'>
                    <input
                      id={`protein-${protein.name}`}
                      type='radio'
                      name='protein'
                      checked={selectedProtein === protein.name}
                      onChange={() =>
                        setSelectedProtein(protein.name)
                      }
                      className='h-4 w-4 accent-primary-orange cursor-pointer'
                    />
                    {protein.name}
                  </span>
                  <span className='text-xs text-dark-gray font-medium'>
                    {protein.extra}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Extra Sides */}
          <div className='mt-6'>
            <h2 className='text-xl font-semibold text-charcoal'>
              Extra Sides (Optional)
            </h2>

            <div className='mt-3 space-y-2'>
              {extraSides.map((side) => (
                <label
                  key={side.name}
                  htmlFor={`side-${side.name}`}
                  className='flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2.5 bg-white cursor-pointer'
                >
                  <span className='inline-flex items-center gap-2 text-sm text-charcoal'>
                    <input
                      id={`side-${side.name}`}
                      type='checkbox'
                      checked={selectedSides.includes(side.name)}
                      onChange={() => handleToggleSide(side.name)}
                      className='h-4 w-4 accent-primary-orange cursor-pointer'
                    />
                    {side.name}
                  </span>
                  <span className='text-xs text-dark-gray font-medium'>
                    {side.extra}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Special Instructions */}
          <div className='mt-6'>
            <h2 className='text-xl font-semibold text-charcoal'>
              Special Instructions
            </h2>
            <textarea
              rows='4'
              className='mt-3 w-full border border-gray-300 rounded-lg p-3 text-sm text-charcoal bg-white resize-none outline-none focus:ring-1 focus:ring-primary-orange'
              placeholder='E.g no onion, food is too spicy, food is too hot'
            />
          </div>

          {/* CTA */}
          <button
            type='button'
            className='w-full mt-5 bg-primary-orange text-white font-semibold py-3 rounded-lg hover:opacity-90 transition'
          >
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default FoodDetails;
