export type Category = 'burger'|'fries'|'pizza'|'drink';
export type CategoryFilter = Category | 'all';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  stock: number;
  available: boolean;
}
