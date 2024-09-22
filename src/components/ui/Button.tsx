import React from "react";
import { buttonProps } from "@/types";

const Button: React.FC<buttonProps> = ({ children, className, primary, secondary }) => {
  return (
    <button
      className={[
        `${className}`,
        primary && "button__primary",
        secondary && "button__secondary",
        "button"
      ]
        .filter(Boolean)
        .join(" ")}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
