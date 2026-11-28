import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem } from "../../types/Cart";
import { formatPrice } from "../../util/currency";

interface CartItemRowProps {
  item: CartItem;
  onChangeQty: (id: string, change: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItemRow({
  item,
  onChangeQty,
  onRemove,
}: CartItemRowProps) {
  const qtyButton =
  "grid h-8 w-8 place-items-center rounded-md border border-line bg-raised transition-colors enabled:hover:border-gold enabled:hover:text-gold enabled:active:scale-95 disabled:opacity-40";

  return (
    <div className="flex items-center gap-3 border-b border-line py-3">
      <img
        src={item.image}
        alt={item.name}
        className="h-14 w-14 rounded-lg object-cover"
      />

      <div className="flex-1">
        <p className="line-clamp-1 text-sm font-semibold">{item.name}</p>
        <p className="text-xs text-gray-400">{formatPrice(item.price)}</p>

        <div className="mt-1 flex items-center gap-2">
          <button
            onClick={() => onChangeQty(item.id, -1)}
            className={qtyButton}
          >
            <Minus size={14} />
          </button>

          <span className="w-6 text-center text-sm">
            {item.quantity_number}
          </span>

          <button
            onClick={() => onChangeQty(item.id, 1)}
            disabled={item.quantity_number >= item.stock}
            className={qtyButton}
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <button
          onClick={() => onRemove(item.id)}
          className="text-rd-500 hover:text-red-400"
        >
          <Trash2 size={16} />
        </button>
        <span className="text-sm font-semibold text-gold">
          {formatPrice(item.price * item.quantity_number)}
        </span>
      </div>
    </div>
  );
}
