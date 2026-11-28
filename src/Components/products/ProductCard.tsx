import type { Product } from "../../types/Product";
import { LOW_STOCK_LIMIT } from "../../util/constants";
import { formatPrice } from "../../util/currency";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  const outOfStock = !product.available || product.stock === 0;
  const lowStock = !outOfStock && product.stock <= LOW_STOCK_LIMIT;

  return (
    <button
      onClick={() => onAdd(product)}
      disabled={outOfStock}
      className="relative overflow-hidden rounded-xl border border-line bg-card text-left transition hover:border-gold disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-line"
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="aspect-4/3 w-full object-cover"
      />

      <div className="p-3">
        <h3 className="line-clamp-2 min-h-12 font-semibold">{product.name}</h3>
        <p className="mt-1 font-semibold text-gold">
          {formatPrice(product.price)}
        </p>
      </div>
      {lowStock && (
        <span className="absolute left-2 top-2 rounded bg-amber-500 px-2 py-0.5 text-xs font-semibold text-black">
          Only {product.stock} left
        </span>
      )}
      {outOfStock && (
        <span className="absolute right-2 top-2 rounded bg-red-600 px-2 py-0.5 text-xs font-semibold">
          Out of stock
        </span>
      )}
    </button>
  );
}
