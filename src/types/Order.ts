import type { CartItem } from "./Cart";

export type PaymentMethod = "card" | "cash";
export type OrderStatus = "pending" | "completed" | "canceled";

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  paymentMethod: PaymentMethod;
  cashierID: string;
  date: string;
  status: OrderStatus;
}
