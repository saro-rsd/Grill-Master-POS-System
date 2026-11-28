import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem } from "../../types/Cart";
import { formatPrice } from "../../util/currency";

interface CartItemRowProps {
    item: CartItem;
    onChangeQty: (id: string , change: number) => void;
    onRemove: (id: string) => void;
}

export default function CartItemRow ({item, onChangeQty, onRemove,}:CartItemRowProps){
    return (
        <div className="flex items-center gap-3 border-b border-line py-3">
            <img src={item.image}
            alt={item.name}
            className="h-14 w-14 rounded-lg object-cover"/>

            <div className="flex-1">
                <p className="line-clamp-1 text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-gray-400">{formatPrice(item.price)}</p>

                <div className="mt-1 flex items-center gap-2">
                    <button onClick={() => onChangeQty(item.id, -1)}
                    className="rounded border border-line p-1 hover:bg-raised"
                    ><Minus size={14} /></button>

                    <span className="w-6 text-center text-sm">{item.quantity_number}</span>

                    <button 
                    onClick={() => onChangeQty(item.id, 1)}
                    disabled={item.quantity_number >= item.stock}
                    className="rounded border border-line p-1 hover:bg-raised disabled:opacity-40"
                    >
                        <Plus size={14} />
                    </button>
                </div>
            </div>

            
        </div>
    )
}