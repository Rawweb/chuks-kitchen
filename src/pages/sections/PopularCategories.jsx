import { useNavigate } from 'react-router-dom';
import cat1 from '../../assets/jollof-1.png';
import cat2 from '../../assets/soup-1.png';
import cat3 from '../../assets/grills.png';
import cat4 from '../../assets/treats.png';
import cat5 from '../../assets/beverages.webp';
import cat6 from '../../assets/desserts.webp';
import MealCard from '../../components/MealCard';

const categories = [
  { title: 'Popular', image: cat4 },
  { title: 'Swallow & Soups', image: cat2 },
  { title: 'Grills & BBQ', image: cat3 },
  { title: 'Jollof Delights', image: cat1 },
  { title: 'Beverages', image: cat5 },
  { title: 'Desserts', image: cat6 },
];

const PopularCategories = () => {
  const navigate = useNavigate();

  return (
    <section className='container py-24'>
      <h1 className='text-center font-bold text-xl md:text-2xl lg:text-3xl'>
        Popular Categories
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {categories.map((category, index) => (
          <div key={index} className='cursor-pointer'>
            <MealCard
              title={category.title}
              image={category.image}
              variant='category'
              onClick={() =>
                navigate(`/explore?category=${category.title}`)
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
