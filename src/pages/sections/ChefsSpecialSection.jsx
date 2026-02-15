import chef1 from '../../assets/spicy-1.png';
import chef2 from '../../assets/jollof-1.png';
import chef3 from '../../assets/jollof-2.png';
import chef4 from '../../assets/jollof-3.png';
import chef5 from '../../assets/jollof-2.png';
import chef6 from '../../assets/soup-2.png';
import { useNavigate } from 'react-router-dom';
import MealCard from '../../components/MealCard';

const chefSpecials = [
  {
    id: 'tilapia-pepper-soup',
    title: 'Spicy Tilapia Pepper Soup',
    description:
      'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.',
    price: '3,500',
    image: chef1,
    proteinOptions: [
      { name: 'Fresh Tilapia', extra: '(Default)' },
      { name: 'Cat Fish', extra: '+N500' },
      { name: 'Goat Meat', extra: '+N700' },
    ],
  },
  {
    id: 'jollof-rice-fried-chiken',
    title: 'Jollof Rice & Fried Chicken',
    description: `Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.`,
    price: '3,500',
    image: chef2,
    proteinOptions: [
      { name: 'Fried Chicken', extra: '(Default)' },
      { name: 'Grilled Fish', extra: '+N500' },
      { name: 'Beef', extra: '+N700' },
    ],
  },

  {
    id: 'jollof-rice-chiken',
    title: 'Jollof Rice & Fried Chicken',
    description: `Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.`,
    price: '3,500',
    image: chef3,
    proteinOptions: [
      { name: 'Fried Chicken', extra: '(Default)' },
      { name: 'Grilled Fish', extra: '+N500' },
      { name: 'Beef', extra: '+N700' },
    ],
  },

  {
    id: 'jollof-rice-smoked-chiken',
    title: 'Jollof Rice & Smoked Chicken',
    description: `Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.`,
    price: '3,500',
    image: chef4,
    proteinOptions: [
      { name: 'Smoked Chicken', extra: '(Default)' },
      { name: 'Turkey', extra: '+N700' },
      { name: 'Beef', extra: '+N700' },
    ],
  },

  {
    id: 'jollof-rice-plantain',
    title: 'Jollof Rice & Plantain',
    description: `Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.`,
    price: '3,500',
    image: chef5,
    proteinOptions: [
      { name: 'Fried Chicken', extra: '(Default)' },
      { name: 'Grilled Fish', extra: '+N500' },
      { name: 'Beef', extra: '+N700' },
    ],
  },

  {
    id: 'egwusi-soup-pounded-yam',
    title: 'Egusi Soup & Pounded Yam',
    description:
      'Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.',
    price: '3,500',
    image: chef6,
    proteinOptions: [
      { name: 'Assorted Meat', extra: '(Default)' },
      { name: 'Goat Meat', extra: '+N700' },
      { name: 'Stock Fish', extra: '+N500' },
    ],
  },
];

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
          {chefSpecials.map((item) => (
            <MealCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              onClick={() =>
                navigate(`/food/${item.id}`, { state: item })
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsSpecialSection;
