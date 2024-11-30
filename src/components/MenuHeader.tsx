"use client"

import React from "react";
import Button from "./ui/Button";
import { add, arrowLine, list, Svg, tile } from "./svgs";
import { useStore } from "@/store";

const MenuHeader = () => {
    const {itemView,setItemView} = useStore()
  return (
    <div className="header__menu">
      <button type="button" className="flex text-lg font-[500] items-center gap-1">
        Active Items<span><Svg svg={arrowLine} width="1em" /></span>
      </button>
      <div className="flex justify-center gap-4">
        <Button collapsible={false} primary>
          <span>
            <Svg svg={add} width="1em" />
          </span>
          New
        </Button>
        <span className="flex justify-center overflow-clip rounded ">
          <button onClick={()=> setItemView(true)} className={["px-2", itemView?"bg-zinc-400":"bg-zinc-200"].filter(Boolean).join(" ")} data-title="icon" type="button">
            <Svg svg={list} width="2em" />
          </button>
          <button onClick={()=> setItemView(false)} className={["px-2", itemView?"bg-zinc-200":"bg-zinc-400"].filter(Boolean).join(" ")} data-title="icon" type="button">
            <Svg svg={tile} width="2em" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default MenuHeader;
