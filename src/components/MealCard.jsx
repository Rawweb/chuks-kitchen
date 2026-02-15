import { Plus, ShoppingCart } from 'lucide-react';

const MealCard = ({
  title,
  description,
  price,
  image,
  onClick,
  variant = 'default',
}) => {
  const isCategory = variant === 'category';
  const isExplore = variant === 'explore';

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      {/* Image */}
      <div className='h-48 w-full overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform'
        />
      </div>

      <div
        className={`p-4 space-y-3 ${isCategory ? 'text-center' : ''}`}
      >
        {/* Title */}
        <h3 className='text-lg font-semibold text-charcoal'>
          {title}
        </h3>

        {/* Only show description if not category */}
        {!isCategory && (
          <p className='text-sm text-gray-500 leading-relaxed'>
            {description}
          </p>
        )}

        {/* Price + Button (only if not category) */}
        {!isCategory && (
          <div className='flex items-center justify-between pt-2'>
            <span className='text-primary-orange font-bold'>
              &#8358;{price}
            </span>

            {isExplore ? (
              <button
                onClick={(e) => e.stopPropagation()}
                className='bg-primary-orange text-white p-2 rounded-lg hover:opacity-90 transition'
              >
                <Plus size={16} />
              </button>
            ) : (
              <button
                onClick={(e) => e.stopPropagation()}
                className='flex items-center gap-2 bg-primary-orange text-white px-3 py-2 rounded-lg text-sm hover:opacity-90 transition'
              >
                <ShoppingCart size={16} />
                Add to cart
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MealCard;

