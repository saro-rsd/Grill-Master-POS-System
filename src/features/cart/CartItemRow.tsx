import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem } from "../../types/Cart";
import { formatPrice } from "../../util/currency";

interface CartItemRowProps {
    items: CartItem;
    onChangeQty: (id: string , change: number) => void;
    onRemove: (id: string) => void;
}

