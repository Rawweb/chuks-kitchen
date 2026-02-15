import Hero from '../components/Hero';
import ChefsSpecialSection from './sections/ChefsSpecialSection';
import PopularCategories from './sections/PopularCategories';

const Home = () => {
  return (
    <main className='py-24'>
      <Hero />
      <PopularCategories />
      <ChefsSpecialSection />
    </main>
  );
};

export default Home;
