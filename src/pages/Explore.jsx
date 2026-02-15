import { useNavigate, useSearchParams } from 'react-router-dom';
import ExploreHero from '../components/ExploreHero';
import MealCard from '../components/MealCard';
import { categories, meals } from '../constants/exploreMeals';


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
      ? meals.filter((meal) => meal.isPopular)
      : meals.filter((meal) => meal.category === activeCategory);

  const handleCategoryClick = (title) => {
    setSearchParams({ category: title });
  };

  return (
    <main className='py-24'>
      <section>
        {/* Heading */}
        <ExploreHero />
        <div className='container'>
          {/* Menu Categories */}
          <div className='mt-20'>
            <h2 className='text-lg md:text-xl font-semibold text-charcoal mb-4'>
              Menu Categories
            </h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
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
              {filteredMeals.map((meal) => (
                <MealCard
                  key={meal.id}
                  title={meal.title}
                  description={meal.description}
                  price={meal.price}
                  image={meal.image}
                  variant='explore'
                  onClick={() =>
                    navigate(`/food/${meal.id}`, {
                      state: { food: meal },
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
