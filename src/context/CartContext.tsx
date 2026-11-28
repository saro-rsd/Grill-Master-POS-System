import { createContext } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "../types/Cart";
import type { useLocalStorage } from "../hooks/useLocalStorage";
import {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateSubtotal,
} from "../features/cart/cartUtils";

interface CartContrextType {
  items: CardItem[];
  subtotal: number;
  addItem: (product: Product) => void;
  changeQty: (id: string, change: number) => void;
  removeItem: (id: string) => void;
  cleanCart: () => void;
}
