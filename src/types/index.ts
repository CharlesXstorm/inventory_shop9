import { PropsWithChildren } from "react";

export interface gutterProps extends PropsWithChildren {
  className?: string;
  type: "column" | "row";
  block?: boolean;
  button?: boolean;
}

export interface buttonProps extends PropsWithChildren {
  id?: string;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  collapsible: boolean;
}

export interface svgProps {
  id?: string;
  isClicked?: boolean;
  className?: string;
  color?: string;
  width?: string;
}

export interface itemProps {
  id: string;
  title: string;
}
export interface menuProps {
  id: string;
  title: string;
  items?: Array<itemProps> | null;
  icon: string | React.JSX.Element;
  collapse: boolean;
}
