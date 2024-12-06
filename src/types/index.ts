import { PropsWithChildren } from "react";
// import { Url } from "url";

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
  isClicked?: boolean;
  isHovered?: boolean;
  hover?: boolean;
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
  path: string;
}
export interface menuProps {
  id: string;
  title: string;
  items?: Array<itemProps> | null;
  icon: (color: string, width: string) => React.JSX.Element;
  collapse: boolean;
}

export interface menuheaderProps {
  title: string;
  toggle?: boolean;
  main?: boolean;
  path?: string;
}

export interface inputProps {
  className?: string;
  id?: string;
  type: string;
  rows?: number;
  cols?:number;
  name?: string;
  value?: string;
  accept?: string;
  placeholder?: string;
  disabled?: boolean;
  maxFile?: number;
  maxSize?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export interface itemsHeaderProps {
  index?: number;
  item: string;
}
export interface partProps {
  [key: string]: any;
}
export interface autopartsProps {
  index: number;
  item?: string;
  part: partProps;
}
