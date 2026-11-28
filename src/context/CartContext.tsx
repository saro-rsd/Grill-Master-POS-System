import { createContext } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "../types/Cart";
import type { Product } from "../types/Product";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateSubtotal,
} from "../features/cart/cartUtils";
import { products } from "../data/products";

interface CartContrextType {
  items: CartItem[];
  subtotal: number;
  addItem: (product: Product) => void;
  changeQty: (id: string, change: number) => void;
  removeItem: (id: string) => void;
  cleanCart: () => void;
}

export const CartContext = createContext<CartContrextType | undefined>(
    undefined,
);

export function CartProvider({children}:{children : ReactNode}){
    const [items,setItems] = useLocalStorage<CartItem[]>("cart",[]);

    const addItem = (product: Product) => setItems((prev) => addToCart(prev, product));

    const changeQty = (id:string, change: number) =>setItems ((prev) => changeQuantity(prev , id , change));

    const removeItem = (id:string) => setItems ((prev) => removeFromCart(prev, id));

    const clearCart = () => setItems([]);
}