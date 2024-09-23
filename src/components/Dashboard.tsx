import Image from "next/image";
import React from "react";
import Gutter from "./ui/Gutter";
import { dashboard } from "@/constants";
import Button from "./ui/Button";
import Span from "./ui/Span";
import Collapsible, { Collapsible_menu } from "./Collapsible";
import { menuProps } from "@/types";

const Menu: React.FC<menuProps> = ({ id, title, items, icon, collapse }) => {
  return (
    <Gutter type="column" button>
      <Button id={id} collapsible={collapse} primary>
        <Span>
          {icon}
          {title}
        </Span>
      </Button>
      {collapse && (
        <Collapsible id={id}>
          {items?.map((item) => (
            <Collapsible_menu key={item.id} id={item.id} className="collapsible__menu">{item.title}</Collapsible_menu>
          ))}
        </Collapsible>
      )}
    </Gutter>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Gutter type="row" block className="dashboard__title">
        <h1>Inventory</h1>
        <Image
          src="/icons/S9.svg"
          alt="logo"
          width={48}
          height={48}
          className="object-contain w-[30%]"
        />
      </Gutter>
      <Gutter type="column" className="dashboard__menu">
        {dashboard.map((menu) => (
          <Menu
            key={menu.id}
            id={menu.id.toString()}
            title={menu.title}
            items={menu.items}
            icon={menu.icon}
            collapse={menu.collapse}
          />
        ))}
      </Gutter>
    </div>
  );
};

export default Dashboard;
