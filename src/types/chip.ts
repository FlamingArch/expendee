import { IconProps } from "./icon";

export type ChipProps = {
  label?: string;
  Icon?: React.FunctionComponent<IconProps>;
  color?: string;
  trailing?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};
