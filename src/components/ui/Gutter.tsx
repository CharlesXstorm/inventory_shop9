import React from "react";
import { gutterProps } from "@/types";

const Gutter: React.FC<gutterProps> = ({
  children,
  className,
  type,
  block = false,
  button = false,
}) => {
  return (
    <div
      className={[
        type === "column" && "flex-col",
        "gutter",
        block && "py-paddingBlock",
        button && "py-paddingBlock px-[5px]",
        `${className}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};

export default Gutter;
