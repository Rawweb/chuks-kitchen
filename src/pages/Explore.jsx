import { useNavigate, useSearchParams } from 'react-router-dom';
import ExploreHero from '../components/ExploreHero';
import MealCard from '../components/MealCard';
import { categories, meals } from '../constants/mealsDetails';

const Explore = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const activeCategory = categories.some(
    (category) => category.title === selectedCategory
  )
    ? selectedCategory
    : 'Popular';

  const filteredMeals =
    activeCategory === 'Popular'
      ? meals.filter((food) => food.isPopular)
      : meals.filter((food) => food.category === activeCategory);

  const handleCategoryClick = (title) => {
    setSearchParams({ category: title });
  };

  return (
    <main className='py-24'>
      <section>
        {/* Heading */}
        <ExploreHero
          breadcrumbItems={[
            { label: 'Home', to: '/' },
            { label: 'Explore' },
          ]}
        />
        <div className='container'>
          {/* Menu Categories */}
          <div className='mt-20'>
            <h2 className='text-lg md:text-xl font-semibold text-charcoal mb-4'>
              Menu Categories
            </h2>

            {/* Mobile Menu Categories */}
            <div className='md:hidden'>
              <select
                aria-label='Select menu category'
                id='menu-category-select'
                value={activeCategory}
                onChange={(e) => handleCategoryClick(e.target.value)}
                className='w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-orange'
              >
                {categories.map((category) => (
                  <option key={category.title} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Menu Categories */}
            <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-4'>
              {categories.map((category) => (
                <div
                  key={category.title}
                  className={`rounded-xl overflow-hidden transition ${
                    activeCategory === category.title
                      ? 'ring-2 ring-primary-orange'
                      : ''
                  }`}
                >
                  <MealCard
                    title={category.title}
                    image={category.image}
                    variant='category'
                    onClick={() =>
                      handleCategoryClick(category.title)
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Meals */}
          <div className='mt-12'>
            <h2 className='text-lg md:text-xl font-semibold text-charcoal'>
              {activeCategory}
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
              {filteredMeals.map((food) => (
                <MealCard
                  key={food.id}
                  title={food.title}
                  description={food.description}
                  price={food.price}
                  image={food.image}
                  variant='explore'
                  onClick={() =>
                    navigate(`/food-details/${food.id}`, {
                      state: { food: food },
                    })
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Explore;
