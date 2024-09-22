import { PropsWithChildren } from "react";

export interface gutterProps extends PropsWithChildren {
  className?: string;
  type?: string;
  block?: boolean;
  button?: boolean;
}

export interface buttonProps extends PropsWithChildren {
  className?: string;
  primary?: boolean;
  secondary?: boolean;
}

export interface svgProps {
  color?: string;
  width?: string;
}
