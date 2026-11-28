import type { CartItem } from "../../types/Cart";
import type { Product } from "../../types/Product";

export function addToCart(items: CartItem[], product: Product): CartItem[] {
  if (product.stock <= 0) return items;

  const existing = items.find((item) => item.id === product.id);

  if (existing) {
    if (existing.quantity_number >= product.stock) return items;

    return items.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity_number + 1 }
        : item,
    );
  }

  return [...items, { ...product, quantity_number: 1 }];
}

export function changeQuantity(
  items: CartItem[],
  id: string,
  change: number,
): CartItem[] {
  return items
    .map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.min(item.quantity_number + change, item.stock),
          }
        : item,
    )
    .filter((item) => item.quantity_number > 0);
}
