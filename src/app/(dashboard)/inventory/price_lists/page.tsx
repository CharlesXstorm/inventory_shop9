"use client";

import ItemsList from "@/components/ItemsList";
import MenuHeader from "@/components/MenuHeader";
import { pricelist } from "@/constants";
import { usePathname } from "next/navigation";
import React from "react";

// const itemsObj = autoparts.header.filter((item, index) => index < 5);
const itemsText = pricelist.header.map((item, index) => item.text);

const page = () => {
  const pathname = usePathname();
  return (
    <div>
      <MenuHeader title={"Price Lists"} options path={pathname} />
      <ItemsList
        customise
        itemsheader={itemsText}
        itemsbody={[]}
        err={pricelist.err}
      />
    </div>
  );
};

export default page;
