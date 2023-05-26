import React from "react";
import { IconProps } from "./icon";

export type SidebarLinkProps = {
  href: string;
  label?: string;
  Icon?: React.FunctionComponent<IconProps>;
  selected?: boolean;
  className?: string;
  style?: React.CSSProperties;
};
