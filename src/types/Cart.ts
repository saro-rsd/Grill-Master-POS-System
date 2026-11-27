import type { Product } from "./Product";

export interface CartItem extends Product {
  quantity_number: number;
}
