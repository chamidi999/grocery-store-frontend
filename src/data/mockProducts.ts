import type { Product, ProductCategory } from '../types/product'

export const categories: ProductCategory[] = [
  { id: 'fruits', name: 'Fruits', slug: 'fruits' },
  { id: 'vegetables', name: 'Vegetables', slug: 'vegetables' },
  { id: 'dairy', name: 'Dairy', slug: 'dairy' },
  { id: 'bakery', name: 'Bakery', slug: 'bakery' },
]

export const products: Product[] = [
  {
    id: 'apple-1',
    name: 'Organic Red Apples',
    slug: 'organic-red-apples',
    description: 'Crisp, juicy apples picked fresh from local farms.',
    price: 3.49,
    unit: '1 lb',
    imageUrl:
      'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80',
    categoryId: 'fruits',
    rating: 4.7,
    stock: 120,
    isOrganic: true,
  },
  {
    id: 'spinach-1',
    name: 'Baby Spinach',
    slug: 'baby-spinach',
    description: 'Fresh baby spinach perfect for salads and smoothies.',
    price: 2.99,
    unit: '8 oz',
    imageUrl:
      'https://images.unsplash.com/photo-1546470427-2273c6c3127f?auto=format&fit=crop&w=600&q=80',
    categoryId: 'vegetables',
    rating: 4.6,
    stock: 90,
    isOrganic: true,
  },
  {
    id: 'milk-1',
    name: 'Whole Milk',
    slug: 'whole-milk',
    description: 'Creamy whole milk from grass-fed cows.',
    price: 4.25,
    unit: '1 gallon',
    imageUrl:
      'https://images.unsplash.com/photo-1541557435984-1c79685a082b?auto=format&fit=crop&w=600&q=80',
    categoryId: 'dairy',
    rating: 4.5,
    stock: 70,
  },
  {
    id: 'bread-1',
    name: 'Artisan Sourdough',
    slug: 'artisan-sourdough',
    description: 'Handcrafted sourdough loaf with a golden crust.',
    price: 5.5,
    unit: '1 loaf',
    imageUrl:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80',
    categoryId: 'bakery',
    rating: 4.8,
    stock: 40,
    isOnSale: true,
  },
]
