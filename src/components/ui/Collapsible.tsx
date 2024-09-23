
import React, { PropsWithChildren } from "react";

interface collapsibleProps extends PropsWithChildren {
  className?: string;
  id: string;
  isClicked?: boolean | null;
}

export const Collapsible_menu: React.FC<collapsibleProps> = ({
  children,
  className,
  id,
}) => {
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
  isClicked,
}) => {
  return (
    <div
      className={[
        isClicked && "collapsible__expand",
        !isClicked && "collapsible__collapse",
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
