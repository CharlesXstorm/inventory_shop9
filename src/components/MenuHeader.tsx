"use client"

import React from "react";
import Button from "./ui/Button";
import { add, arrowLine, list, Svg, tile } from "./svgs";
import { useStore } from "@/store";

const MenuHeader = () => {
    const {setItemView} = useStore()
  return (
    <div className="header__menu">
      <button type="button" className="flex text-lg font-[500] items-center gap-1">
        Active Items<span><Svg svg={arrowLine} width="1em" /></span>
      </button>
      <div className="flex justify-center gap-4">
        <Button collapsible={false} primary>
          <span>
            <Svg svg={add} width="2em" />
          </span>
          New
        </Button>
        <span className="flex justify-center rounded overflow-clip ">
          <button onClick={()=> setItemView(true)} className="bg-zinc-400 px-2" title="icon" type="button">
            <Svg svg={list} width="2em" />
          </button>
          <button onClick={()=> setItemView(false)} className="bg-zinc-200 px-2" title="icon" type="button">
            <Svg svg={tile} width="2em" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default MenuHeader;
