
import React from "react";
import { buttonProps } from "@/types";
import {arrow, Svg} from "../svgs";
import Span from "./Span";

const Button: React.FC<buttonProps> = ({
  children,
  id,
  className,
  primary,
  secondary,
  collapsible,
  isClicked,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {

  return (
    <button
      className={[
        `${className}`,
        primary && "button__primary",
        (secondary || isClicked) && "button__secondary",
        "button",
      ]
        .filter(Boolean)
        .join(" ")}
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
      {collapsible && (
        <Span>
          <Svg svg={arrow} color="#000000" isClicked={isClicked} isHovered={isHovered} className="svg__arrow" />
        </Span>
      )}
    </button>
  );
};

export default Button;
