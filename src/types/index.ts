import React,{ PropsWithChildren } from "react";
// import { Url } from "url";

export interface gutterProps extends PropsWithChildren {
  className?: string;
  type: "column" | "row";
  block?: boolean;
  button?: boolean;
}

export interface buttonProps extends PropsWithChildren {
  id?: string;
  path?: string | null;
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
  id?: string;
  title?: string;
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
  options?: boolean;
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
  onChange?: (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=> void;
}

export interface itemsHeaderProps {
  index?: number;
  item: string;
}
export interface itemsbodyProps {
  index: number;
  item?: string;
  part: partProps;
  customise?: boolean;
  itemsheader?: string[];
}
export interface itemslistProps {
  customise?: boolean;
  itemsheader: string[];
  itemsbody: partProps[];
  err:string;
}
export interface partProps {
  [key: string]: any;
}
export interface autopartsProps {
  index: number;
  item?: string;
  part: partProps;
}
