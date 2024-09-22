import {SvgHome, SvgInventory, SvgSales, SvgPurchase, SvgReports, SvgDocuments} from "@/components/svgs";

export const dashboard = [
  {
    id: 1,
    title: "Home",
    icon: <SvgHome />,
    collapse: false,
  },
  {
    id: 2,
    title: "Inventory",
    icon: <SvgInventory/>,
    collapse: true,
  },
  {
    id: 3,
    title: "Sales",
    icon: <SvgSales/>,
    collapse: true,
  },
  {
    id: 4,
    title: "Purchase",
    icon: <SvgPurchase/>,
    collapse: true,
  },
  {
    id: 5,
    title: "Reports",
    icon: <SvgReports/>,
    collapse: false,
  },
  {
    id: 6,
    title: "Documents",
    icon: <SvgDocuments/>,
    collapse: false,
  },
];
