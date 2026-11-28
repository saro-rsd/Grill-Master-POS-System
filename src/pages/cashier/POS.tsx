import { useState } from "react";
import CategoryTabs from "../../components/products/CategoryTabs";
import ProductGrid from "../../components/products/ProductGrid";
import { products } from "../../data/products";
import type { CategoryFilter } from "../../types/Product";
import Cart from "../../features/cart/Cart";
import { useCart } from "../../hooks/useCart";

export default function POS() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const { addItem } = useCart();

  const visibleProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="flex h-full gap-4">
      <section className="flex flex-1 flex-col gap-4 overflow-y-auto">
        <CategoryTabs selected={category} onSelect={setCategory} />
        <ProductGrid products={visibleProducts} onAdd={addItem} />
      </section>
      
      <Cart />
    </div>
  );
}
