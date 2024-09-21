import React from "react";

const Gutter = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="gutter">{children}</div>;
};

export default Gutter;
