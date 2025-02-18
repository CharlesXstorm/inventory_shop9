import {
  home,
  inventory,
  sales,
  purchase,
  reports,
  documents,
} from "@/components/svgs";
import { report } from "process";
import { Url } from "url";

export const dashboard = [
  {
    id: 1,
    title: "Home",
    items: null,
    icon: home,
    collapse: false,
  },
  {
    id: 2,
    title: "Inventory",
    items: [
      { id: "2_1", title: "Items", path:"/inventory/items" },
      { id: "2_2", title: "Price Lists", path:"/inventory/price_list" },
      { id: "2_3", title: "Inventory Adjustments", path:"/inventory/adjustments" },
    ],
    icon: inventory,
    collapse: true,
  },
  {
    id: 3,
    title: "Sales",
    items: [
      { id: "3_1", title: "Sales Orders", path:"/sales/orders" },
      { id: "3_2", title: "Sales Receipts", path:"/sales/receipts" },
      { id: "3_3", title: "Sales Return", path:"/sales/return" },
      { id: "3_4", title: "Invoices", path:"/sales/invoices" },
    ],
    icon: sales,
    collapse: true,
  },
  {
    id: 4,
    title: "Purchase",
    items: [
      { id: "4_1", title: "Expenses", path:"/purchase/expenses" },
      { id: "4_2", title: "Purchase Orders", path:"/purchase/orders" },
      { id: "4_3", title: "Bills", path:"/purchase/bills" },
      { id: "4_4", title: "Payments Made", path:"/purchase/payments" },
    ],
    icon: purchase,
    collapse: true,
  },
  {
    id: 5,
    title: "Reports",
    items: null,
    icon: reports,
    collapse: false,
  },
  {
    id: 6,
    title: "Documents",
    items: null,
    icon: documents,
    collapse: false,
  },
];

export const itemsListHeaderField = [
  {
    text: "NAME",
    locked: true
  },
  {
    text: "SKU",
    locked: false
  },
  {
    text: "STOCK IN HAND",
    locked: false
  },
  {
    text: "REORDER LEVEL",
    locked: false
  },
  {
    text: "DESCRIPTION",
    locked: false
  },
  {
    text: "MANUFACTURER",
    locked: false
  },
  {
    text: "EAN",
    locked: false
  },
  {
    text: "MPN",
    locked: false
  },
  {
    text: "ENN",
    locked: false
  },
  {
    text: "PURCHASE RATE",
    locked: false
  }
]
