"use client";

// import { isMobile } from "@/app/utils";
import Image from "next/image";
import React from "react";
import useIsMobile from "@/hooks/deviceCheck";
import Gutter from "./ui/Gutter";
import { dashboard } from "@/constants";
import Menu from "./Menu";
import { useStore } from "@/store";
import CancelButton from "./ui/CancelButton";

const Dashboard = () => {
  const { displayMenu, setDisplayMenu } = useStore();
  const isMobile = useIsMobile();

  return (
    <div
      className={[
        "dashboard",
        `${
          isMobile
            ? displayMenu
              ? "flex translate-x-[0%]"
              : "hidden translate-x-[-100%]"
            : "flex translate-x-[0%]"
        } `,
      ]
        .filter(Boolean)
        .join(" ")}
    >
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
        <div className="dashboard__menu__contents">
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
        </div>
      </Gutter>
      {isMobile && <CancelButton cancelFn={setDisplayMenu} />}
    </div>
  );
};

export default Dashboard;
