"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store";
import { menuheaderProps } from "@/types";
import Button from "./ui/Button";
import { add, arrowLine, cancel, list, Svg, tile, option } from "./svgs";

const MenuHeader: React.FC<menuheaderProps> = ({
  title,
  toggle = false,
  main = false,
  options = false,
  path,
}) => {
  const { itemView, setItemView } = useStore();
  const [buttonPress, setButtonPress] = useState(false);
  const router = useRouter();

  const cancelHandler = () => {
    router.back();
  };

  const navigate = () => {
    router.push(`${path}/new`);
  };

  return (
    <div className="header__menu">
      <button
        type="button"
        className="flex text-lg font-[500] items-center gap-1"
      >
        <span>{title}</span>
        {toggle && (
          <span>
            <Svg svg={arrowLine} width="1em" />
          </span>
        )}
      </button>

      {options && (
        <div className="flex justify-center gap-4">
          <Button onClick={navigate} collapsible={false} primary>
            <span>
              <Svg svg={add} width="1em" />
            </span>
            New
          </Button>
          <span
            className={[
              "flex justify-center border px-2 bg-zinc-200 overflow-clip rounded",
              buttonPress ? "border-zinc-200" : "border-zinc-400",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <button
              onMouseDown={() => setButtonPress(true)}
              onMouseUp={() => setButtonPress(false)}
              onClick={() => setItemView(true)}
              data-title="icon"
              type="button"
            >
              <Svg svg={option} width="2em" />
            </button>
          </span>
        </div>
      )}

      {main && (
        <div className="flex justify-center gap-4">
          <Button onClick={navigate} collapsible={false} primary>
            <span>
              <Svg svg={add} width="1em" />
            </span>
            New
          </Button>
          <span className="flex justify-center overflow-clip rounded ">
            <button
              onClick={() => setItemView(true)}
              className={["px-2", itemView ? "bg-zinc-400" : "bg-zinc-200"]
                .filter(Boolean)
                .join(" ")}
              data-title="icon"
              type="button"
            >
              <Svg svg={list} width="2em" />
            </button>
            <button
              onClick={() => setItemView(false)}
              className={["px-2", itemView ? "bg-zinc-200" : "bg-zinc-400"]
                .filter(Boolean)
                .join(" ")}
              data-title="icon"
              type="button"
            >
              <Svg svg={tile} width="2em" />
            </button>
          </span>
        </div>
      )}

      {!main && !options && (
        <div className="flex">
          <button onClick={cancelHandler}>
            <Svg svg={cancel} width="1.5em" />{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuHeader;
