"use client";

import React, { useState } from "react";
import { buttonProps } from "@/types";
import { useStore } from "@/store";
import { SvgArrow } from "../svgs";
import Span from "./Span";

const Button: React.FC<buttonProps> = ({
  children,
  id,
  className,
  primary,
  secondary,
  collapsible,
}) => {
  const [isClicked, setIsClicked] = useState(false)
  const { setHovered, setClickedID, clickedID } = useStore();

  console.log('clicked',isClicked,"clickedID",clickedID)
  return (
    <button
      className={[
        `${className}`,
        primary && "button__primary",
        secondary && "button__secondary",
        "button",
      ]
        .filter(Boolean)
        .join(" ")}
      type="button"
      onMouseEnter={() => setHovered(true, id)}
      onMouseLeave={() => setHovered(false, null)}
      onClick={() => {
        setIsClicked((prev)=> !prev)
        setClickedID(id)
      }}
    >
      {children}
      {collapsible && (
        <Span>
          <SvgArrow id={id} isClicked={isClicked} className="svg__arrow" />
        </Span>
      )}
    </button>
  );
};

export default Button;
