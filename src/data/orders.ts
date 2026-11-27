import type { Order } from "../types/Order";
import { products } from "./products";

export const orders: Order[] = [
  {
    id: "o001",
    items: [{ ...products[0], quantity_number: 2 }],
    total: 2500,
    paymentMethod: "cash",
    cashierID: "u002",
    date: "2026-11-24T14:30:00.000Z",
    status: "completed",
  },
  {
    id: "o002",
    items: [
      { ...products[1], quantity_number: 1 },
      { ...products[7], quantity_number: 1 },
    ],
    total: 2150,
    paymentMethod: "cash",
    cashierID: "u002",
    date: "2026-11-24T15:40:00.000Z",
    status: "completed",
  },
  {
    id: "o003",
    items: [
      { ...products[4], quantity_number: 2 },
      { ...products[6], quantity_number: 3 },
    ],
    total: 6150,
    paymentMethod: "cash",
    cashierID: "u004",
    date: "2026-11-25T08:30:00.000Z",
    status: "completed",
  },
  {
    id: "o004",
    items: [{ ...products[9], quantity_number: 1 }],
    total: 500,
    paymentMethod: "cash",
    cashierID: "u003",
    date: "2026-11-25T16:30:00.000Z",
    status: "canceled",
  },
  {
    id: "o005",
    items: [
      { ...products[8], quantity_number: 2 },
      { ...products[6], quantity_number: 5 },
    ],
    total: 3350,
    paymentMethod: "cash",
    cashierID: "u003",
    date: "2026-11-25T18:30:00.000Z",
    status: "completed",
  },
  {
    id: "o006",
    items: [{ ...products[4], quantity_number: 5 }],
    total: 11250,
    paymentMethod: "cash",
    cashierID: "u004",
    date: "2026-11-26T12:30:00.000Z",
    status: "pending",
  },
];
