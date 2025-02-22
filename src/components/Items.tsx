"use client";

import React from "react";
import ItemsList from "./ItemsList";
import ItemsTile from "./ItemsTile";
import { useStore } from "@/store";
import { parts } from "@/data";
import { autoparts } from "@/constants";

const itemsObj = autoparts.header.filter((item, index) => index < 5);
const itemsText = itemsObj.map((item, index) => item.text);

const Items = () => {
  const { itemView } = useStore();
  return (
    <div className="w-full flex-grow overflow-hidden">
      <>
        {itemView && (
          <ItemsList
            customise
            itemsheader={itemsText}
            itemsbody={parts}
            err={autoparts.err}
          />
        )}
      </>
      <>{!itemView && <ItemsTile />}</>
    </div>
  );
};

export default Items;
