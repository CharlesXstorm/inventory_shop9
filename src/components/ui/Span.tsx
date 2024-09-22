import React, { PropsWithChildren } from "react";

interface spanProps extends PropsWithChildren {
  className?: string;
}

const Span: React.FC<spanProps> = ({ children, className }) => {
  return (
    <span
      className={["flex gap-2 items-center", `${className}`]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
};

export default Span;
