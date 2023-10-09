import { IconProps } from "./icon";

export type ChipProps = {
  label?: string;
  chipStyle?: "primary" | "secondary";
  Icon?: React.FunctionComponent<IconProps>;
  color?: string;
  trailing?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
} & Omit<
  Omit<Omit<React.HTMLProps<HTMLButtonElement>, "className">, "type">,
  "label"
>;
