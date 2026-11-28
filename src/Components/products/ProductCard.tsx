import type { Product } from "../../types/Product";
import { LOW_STOCK_LIMIT } from "../../util/constants";
import { formatPrice } from "../../util/currency";
import { Plus } from "lucide-react";

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
      className="group relative overflow-hidden rounded-xl border border-line bg-card text-left transition duration-200 enabled:hover:-translate-y-1 enabled:hover:border-gold enabled:hover:shadow-lg enabled:hover:shadow-gold/15 enabled:active:scale-[0.98] disabled:opacity-50"
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="aspect-4/3 w-full object-cover"
      />

      <div className="p-3">
        <h3 className="line-clamp-2 min-h-12 font-semibold">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="rounded-lg bg-gold/15 px-2.5 py-1 font-display text-xl font-bold text-gold">
            {formatPrice(product.price)}
          </span>

          {!outOfStock && (
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-black">
              <Plus size={18} strokeWidth={3} />
            </span>
          )}
        </div>
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
