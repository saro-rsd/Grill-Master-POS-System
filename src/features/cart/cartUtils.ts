import type { CartItem } from "../../types/Cart";
import type { Product } from "../../types/Product";

export function addToCart(items: CartItem[], product: Product): CartItem[]{
    if(product.stock <= 0) return items;

    const existing = items.find((item) => item.id === product.id);
}