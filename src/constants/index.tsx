import {
  SvgHome,
  SvgInventory,
  SvgSales,
  SvgPurchase,
  SvgReports,
  SvgDocuments,
} from "@/components/svgs";

export const dashboard = [
  {
    id: 1,
    title: "Home",
    items: null,
    icon: <SvgHome />,
    collapse: false,
  },
  {
    id: 2,
    title: "Inventory",
    items: [
      { id: "2_1", title: "Add items" },
      { id: "2_2", title: "Price Lists" },
      { id: "2_3", title: "Inventory Adjustments" },
    ],
    icon: <SvgInventory />,
    collapse: true,
  },
  {
    id: 3,
    title: "Sales",
    items: [
      { id: "3_1", title: "Sales Orders" },
      { id: "3_2", title: "Invoices" },
      { id: "3_3", title: "Sales Receipts" },
      { id: "3_4", title: "Sales Return" },
    ],
    icon: <SvgSales />,
    collapse: true,
  },
  {
    id: 4,
    title: "Purchase",
    items: [
      { id: "4_1", title: "Expenses" },
      { id: "4_2", title: "Purchase Orders" },
      { id: "4_3", title: "Bills" },
      { id: "4_4", title: "Payments Made" },
    ],
    icon: <SvgPurchase />,
    collapse: true,
  },
  {
    id: 5,
    title: "Reports",
    items: null,
    icon: <SvgReports />,
    collapse: false,
  },
  {
    id: 6,
    title: "Documents",
    items: null,
    icon: <SvgDocuments />,
    collapse: false,
  },
];
