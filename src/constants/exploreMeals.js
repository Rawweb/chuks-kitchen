import jollof1 from '../assets/jollof-1.png';
import jollof2 from '../assets/jollof-2.png';
import jollof3 from '../assets/jollof-3.png';
import soup1 from '../assets/soup-1.png';
import soup2 from '../assets/soup-2.png';
import soup3 from '../assets/soup-3.png';
import soup4 from '../assets/soup-4.png';
import soup5 from '../assets/soup-5.png';
import soup6 from '../assets/soup-6.png';
import spicy1 from '../assets/spicy-1.png';
import spicy2 from '../assets/spicy-2.png';
import grills from '../assets/grills.png';
import treats from '../assets/treats.png';
import cat1 from '../assets/jollof-1.png';
import cat2 from '../assets/soup-1.png';
import cat3 from '../assets/grills.png';
import cat4 from '../assets/treats.png';
import cat5 from '../assets/beverages.webp';
import cat6 from '../assets/desserts.webp';

export const meals = [
  {
    id: 'jollof-rice-fried-chiken',
    title: 'Jollof Rice & Fried Chicken',
    description:
      'Our signature Jollof rice, served with crispy fried chicken and plantain.',
    price: '3,500',
    image: jollof1,
    category: 'Jollof Delights',
    isPopular: true,
    proteinOptions: [
      { name: 'Fried Chicken', extra: '(Default)' },
      { name: 'Grilled Fish', extra: '+N500' },
      { name: 'Beef', extra: '+N700' },
    ],
  },
  {
    id: 'party-jollof-rice',
    title: 'Party Jollof Rice',
    description:
      'Smoky party-style Jollof rice with rich pepper base and bold flavor.',
    price: '3,100',
    image: jollof2,
    category: 'Jollof Delights',
    isPopular: true,
    proteinOptions: [
      { name: 'Fried Chicken', extra: '(Default)' },
      { name: 'Turkey', extra: '+N700' },
      { name: 'Beef', extra: '+N700' },
    ],
  },
  {
    id: 'party-jollof-rice-veg',
    title: 'Party Jollof Rice (Veg)',
    description:
      'Vegetarian version of our party Jollof with sweet peppers and herbs.',
    price: '2,900',
    image: jollof3,
    category: 'Jollof Delights',
    isPopular: false,
    proteinOptions: [
      { name: 'No Protein', extra: '(Default)' },
      { name: 'Mushroom', extra: '+N500' },
      { name: 'Tofu', extra: '+N700' },
    ],
  },
  {
    id: 'egusi-soup-pounded-yam',
    title: 'Egusi Soup & Pounded Yam',
    description:
      'Rich Egusi with assorted meat, paired with soft and smooth pounded yam.',
    price: '3,500',
    image: soup1,
    category: 'Swallow & Soups',
    isPopular: true,
    proteinOptions: [
      { name: 'Assorted Meat', extra: '(Default)' },
      { name: 'Goat Meat', extra: '+N700' },
      { name: 'Stock Fish', extra: '+N500' },
    ],
  },
  {
    id: 'okra-soup-fufu',
    title: 'Okra Soup & Fufu',
    description:
      'Fresh okra soup in a flavorful stock, served with soft and stretchy fufu.',
    price: '3,200',
    image: soup2,
    category: 'Swallow & Soups',
    isPopular: false,
    proteinOptions: [
      { name: 'Assorted Meat', extra: '(Default)' },
      { name: 'Goat Meat', extra: '+N700' },
      { name: 'Fish', extra: '+N500' },
    ],
  },
  {
    id: 'ogbono-soup-fufu',
    title: 'Ogbono Soup & Fufu',
    description:
      'Deeply savory Ogbono soup with traditional seasoning and fresh fufu.',
    price: '3,300',
    image: soup3,
    category: 'Swallow & Soups',
    isPopular: false,
    proteinOptions: [
      { name: 'Assorted Meat', extra: '(Default)' },
      { name: 'Shaki', extra: '+N500' },
      { name: 'Stock Fish', extra: '+N500' },
    ],
  },
  {
    id: 'seafood-okra-soup',
    title: 'Seafood Okra Soup',
    description:
      'Fresh seafood and okra simmered with spices for a deeply satisfying bite.',
    price: '3,600',
    image: soup4,
    category: 'Swallow & Soups',
    isPopular: true,
    proteinOptions: [
      { name: 'Seafood Mix', extra: '(Default)' },
      { name: 'Prawn Only', extra: '+N700' },
      { name: 'Fish Only', extra: '+N500' },
    ],
  },
  {
    id: 'beef-pepper-soup',
    title: 'Beef Pepper Soup',
    description:
      'Peppery broth loaded with tender beef cuts and aromatic local spices.',
    price: '2,800',
    image: soup5,
    category: 'Swallow & Soups',
    isPopular: false,
    proteinOptions: [
      { name: 'Beef', extra: '(Default)' },
      { name: 'Goat Meat', extra: '+N700' },
      { name: 'Cat Fish', extra: '+N500' },
    ],
  },
  {
    id: 'light-soup-fufu',
    title: 'Light Soup & Fufu',
    description:
      'A light, spicy soup with balanced herbs served alongside fluffy fufu.',
    price: '3,000',
    image: soup6,
    category: 'Swallow & Soups',
    isPopular: false,
    proteinOptions: [
      { name: 'Assorted Meat', extra: '(Default)' },
      { name: 'Chicken', extra: '+N500' },
      { name: 'Fish', extra: '+N500' },
    ],
  },
  {
    id: 'spicy-tilapia-platter',
    title: 'Spicy Tilapia Platter',
    description:
      'Well-marinated whole tilapia with house spice blend and side vegetables.',
    price: '4,200',
    image: spicy1,
    category: 'Grills & BBQ',
    isPopular: true,
    proteinOptions: [
      { name: 'Whole Tilapia', extra: '(Default)' },
      { name: 'Cat Fish', extra: '+N700' },
      { name: 'Chicken', extra: '+N500' },
    ],
  },
  {
    id: 'grilled-fish-platter',
    title: 'Grilled Fish Platter',
    description:
      'Smoky and juicy fish from the grill, served with fresh pepper sauce.',
    price: '4,000',
    image: spicy2,
    category: 'Grills & BBQ',
    isPopular: false,
    proteinOptions: [
      { name: 'Tilapia', extra: '(Default)' },
      { name: 'Croaker', extra: '+N700' },
      { name: 'Cat Fish', extra: '+N500' },
    ],
  },
  {
    id: 'mixed-bbq-platter',
    title: 'Mixed BBQ Platter',
    description:
      'A mix of grilled chicken, fish, and beef with charred vegetables.',
    price: '4,500',
    image: grills,
    category: 'Grills & BBQ',
    isPopular: true,
    proteinOptions: [
      { name: 'Mixed Grill', extra: '(Default)' },
      { name: 'Chicken Only', extra: '+N0' },
      { name: 'Beef Only', extra: '+N500' },
    ],
  },
  {
    id: 'zobo-drink',
    title: 'Chilled Zobo',
    description:
      'Refreshing chilled hibiscus drink infused with pineapple and ginger.',
    price: '1,000',
    image: cat5,
    category: 'Beverages',
    isPopular: false,
    proteinOptions: [
      { name: 'Regular Cup', extra: '(Default)' },
      { name: 'Large Cup', extra: '+N500' },
      { name: 'Bottle', extra: '+N700' },
    ],
  },
  {
    id: 'fruit-parfait',
    title: 'Fruit Parfait',
    description:
      'Layered yogurt parfait with fruits, granola, and a touch of honey.',
    price: '1,800',
    image: cat6,
    category: 'Desserts',
    isPopular: false,
    proteinOptions: [
      { name: 'Classic', extra: '(Default)' },
      { name: 'Extra Fruit', extra: '+N500' },
      { name: 'No Granola', extra: '+N0' },
    ],
  },
  {
    id: 'sweet-treats-box',
    title: 'Sweet Treats Box',
    description:
      'Handpicked sweet treats perfect for sharing or enjoying solo.',
    price: '2,300',
    image: treats,
    category: 'Desserts',
    isPopular: true,
    proteinOptions: [
      { name: 'Classic Mix', extra: '(Default)' },
      { name: 'Premium Mix', extra: '+N700' },
      { name: 'Mini Box', extra: '-N300' },
    ],
  },
];

export const categories = [
  { title: 'Popular', image: cat4 },
  { title: 'Swallow & Soups', image: cat2 },
  { title: 'Grills & BBQ', image: cat3 },
  { title: 'Jollof Delights', image: cat1 },
  { title: 'Beverages', image: cat5 },
  { title: 'Desserts', image: cat6 },
];

