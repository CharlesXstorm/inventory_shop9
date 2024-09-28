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
  isClicked: boolean;
  isHovered: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface svgProps {
  id?: string;
  svg: (color: string, width: string) => React.JSX.Element;
  isClicked?: boolean;
  isHovered?: boolean;
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
  icon: (color: string, width: string) => React.JSX.Element;
  collapse: boolean;
}

export interface inputProps {
  className?: string;
  type: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}