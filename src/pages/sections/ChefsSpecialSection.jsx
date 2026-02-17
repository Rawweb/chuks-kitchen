import { useNavigate } from 'react-router-dom';
import MealCard from '../../components/MealCard';
import { chefSpecials } from '../../constants/mealsDetails';

const ChefsSpecialSection = () => {
  const navigate = useNavigate();

  return (
    <section className='container py-24'>
      <div>
        {/* Heading */}
        <h1 className='text-center font-bold text-xl md:text-2xl lg:text-3xl'>
          Chef's Special
        </h1>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {chefSpecials.map((food) => (
            <MealCard
              key={food.id}
              title={food.title}
              description={food.description}
              price={food.price}
              image={food.image}
              onClick={() =>
                navigate(`/food-details/${food.id}`, { state: food })
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsSpecialSection;
