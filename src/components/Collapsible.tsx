"use client";

import { useStore } from "@/store";
import React, { PropsWithChildren } from "react";

interface collapsibleProps extends PropsWithChildren {
  className?: string;
  id: string;
}

export const Collapsible_menu: React.FC<collapsibleProps> = ({
  children,
  className,
  id,
}) => {
//   const { clickedID } = useStore();
  return (
    <button
      type="button"
      className={["", `${className}`].filter(Boolean).join(" ")}
    >
      {children}
    </button>
  );
};

const Collapsible: React.FC<collapsibleProps> = ({
  children,
  className,
  id,
}) => {
  const { clickedID } = useStore();
  return (
    <div
      className={[
        clickedID === id && "collapsible__expand",
        clickedID != id && "collapsible__collapse",
        "collapsible",
        `${className}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};

export default Collapsible;
