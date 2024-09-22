import Image from "next/image";
import React from "react";
import Gutter from "./ui/Gutter";
import { dashboard } from "@/constants";
import Button from "./ui/Button";

interface menuProps {
  title: string;
  icon: string | React.JSX.Element;
}

const Menu: React.FC<menuProps> = ({ title, icon }) => {
  return (
    <Gutter button>
      <Button primary>{icon}{title}</Button>
    </Gutter>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Gutter block className="bg-black gap-2">
        <h1>Inventory</h1>
        <Image src="/icons/S9.svg" alt="logo" width={48} height={48} className="object-contain w-[30%]" />
      </Gutter>
      <Gutter type="column">
        {dashboard.map((menu) => (
          <Menu key={menu.id} title={menu.title} icon={menu.icon} />
        ))}
      </Gutter>
    </div>
  );
};

export default Dashboard;
