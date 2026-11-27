export type Category = 'burger'|'fries'|'pizza'|'coffee'|'drink';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  stock: number;
  available: boolean;
}
