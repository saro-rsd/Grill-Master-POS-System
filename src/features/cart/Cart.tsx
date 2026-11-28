import { CreditCard, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/currency";
import CartItemRow from "./CartItemRow";

export default function Cart(){
    const {items , subtotal, changeQty , removeItem , clearCart} = useCart();

    const isEmpty = items.length === 0;

    return(
        <aside className="flex w-96 flex-col rounded-xl border border-line bg-panel p-4">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
                <ShoppingCart size={22} />
            </h2>

            <div className="mt-3 flex-1 overflow-y-auto">
                {isEmpty ?(
                    <p className="mt-10 text-center text-gray-400">
                        Cart is empty. Tap a product to add it.
                    </p> 
                ):(
                    items.map((item) => (
                        <CartItemRow 
                        key={item.id}
                        item={item}
                        onChangeQty={changeQty}
                        onRemove={removeItem}
                        />
                    ))
                )}
            </div>

            <div className="border-t border-line pt-3">
                <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-gold">{formatPrice(subtotal)}</span>
                </div>

                <div className="mt-4 flex gap-3">
                    <button
                    onClick={clearCart}
                    disabled={isEmpty}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gold py-3 font-semibold text-gold hover:bg-gold/10 disabled:opacity-40">
                        <Trash2 size={18} />
                        clear
                    </button>

                    <button disabled={isEmpty}
                    className="flex flex-2 items-center justify-center gap-2 rounded-lg bg-gold py-3 font-semibold text-black hover:bg-gold-dark disabled:opacity-40">
                        <CreditCard size={18} />
                        Pay
                    </button>
                </div>
            </div>
        </aside>
    );
}