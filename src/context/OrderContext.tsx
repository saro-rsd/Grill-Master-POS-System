import { createContext } from "react";
import type { ReactNode } from "react";
import type { Order } from "../types/Order";
import {orders as mockOrders} from "../data/orders";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface OrderContextType{
    orders : Order[];
    addOrder: (order: Order) => void;
}
export const OrderContext = createContext <OrderContextType | undefined>(undefined); 

export function OrderProvider ({children}:{children: ReactNode}){
    const [orders, setOrders] = useLocalStorage<Order[]>("orders", mockOrders);

    const addOrder = (order: Order) => setOrders ((prev) => [order,...prev]);

    return(
        <OrderContext.Provider value={{orders, addOrder}}>
            {children}
        </OrderContext.Provider>
    );
}