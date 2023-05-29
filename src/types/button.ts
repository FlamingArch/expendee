import { IconProps } from "./icon";

export type ButtonProps =
  | {
      label?: React.ReactNode;
      Icon?: React.FunctionComponent<IconProps>;
      trailing?: React.ReactNode;
      children?: React.ReactNode;
      styles?: React.CSSProperties;
      className?: string;
      buttonStyle?: ButtonStyles;
    } & Omit<
      Omit<Omit<React.HTMLProps<HTMLButtonElement>, "className">, "type">,
      "label"
    >;

export type ButtonStyles =
  | "navLink"
  | "navLinkSelected"
  | "actionSidebar"
  | "primary"
  | "secondary"
  | "action";
