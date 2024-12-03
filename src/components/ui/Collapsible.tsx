import Link from "next/link";
import React, { PropsWithChildren } from "react";
// import { Url } from "url";

interface collapsibleProps extends PropsWithChildren {
  className?: string;
  id: string;
  isClicked?: boolean | null;
  path?: string;
}

export const Collapsible_menu: React.FC<collapsibleProps> = ({
  children,
  className,
  id,
  path="/",
}) => {
  return (
    <Link
      href={path}
      type="button"
      className={["", `${className}`].filter(Boolean).join(" ")}
    >
      {children}
    </Link>
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
