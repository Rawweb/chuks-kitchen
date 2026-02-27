import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-6 right-6 z-50 bg-primary-blue text-white p-3 rounded-full shadow-xl hover:bg-primary-hover hover:scale-110 active:scale-95 transition-all duration-300'
      aria-label='Scroll to top'
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
