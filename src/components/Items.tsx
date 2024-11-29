"use client";

import React from "react";
import ItemsList from "./ItemsList";
import ItemsTile from "./ItemsTile";
import { useStore } from "@/store";

const Items = () => {
  const { itemView } = useStore();
  return (
    <div className="w-full">
      <>{itemView && <ItemsList />}</>
      <>{!itemView && <ItemsTile />}</>
    </div>
  );
};

export default Items;
