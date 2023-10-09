import React from "react";
import { IconProps } from "./icon";
import { ButtonStyles } from "./button";

export type SidebarLinkProps = {
  href: string;
  label?: string | React.ReactNode;
  Icon?: React.FunctionComponent<IconProps>;
  selected?: boolean;
  className?: string;
  style?: React.CSSProperties;
  buttonStyle?: ButtonStyles;
};
