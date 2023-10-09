export type AppBarProps = {
  leading?: React.ReactNode;
  title?: React.ReactNode;
  center?: React.ReactNode | React.ReactNode;
  actions?: React.ReactNode | React.ReactNode[];
  heading?: React.ReactNode;
  primary?: React.ReactNode;
  children?: React.ReactNode;
  responsive?: boolean;
  sticky?: boolean | "bottom";
  backdrop?:
    | "clear"
    | "gradient"
    | "gradientReverse"
    | "gradientBlack"
    | "material"
    | "materialShadow"
    | "solid"
    | "shadow";
  background?:
    | "clear"
    | "gradient"
    | "gradientReverse"
    | "gradientBlack"
    | "material"
    | "materialShadow"
    | "solid"
    | "shadow";
  className?: string;
  cornerRadius?:
    | number
    | {
        topLeft?: number;
        topRight?: number;
        bottomLeft?: number;
        bottomRight?: number;
      };
  padding?:
    | number
    | { top?: number; right?: number; bottom?: number; left?: number };
  margin?:
    | number
    | { top?: number; right?: number; bottom?: number; left?: number };
  gap?: number;
  style?: React.CSSProperties;
  classNames?: {
    root?: string;
    container?: string;
    toolbar: string;
    leading?: string;
    title?: string;
    center?: string;
    actions?: string;
    primaryBar?: string;
    heading?: string;
    primary?: string;
    children?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    container?: React.CSSProperties;
    toolbar: React.CSSProperties;
    leading?: React.CSSProperties;
    title?: React.CSSProperties;
    center?: React.CSSProperties;
    actions?: React.CSSProperties;
    primaryBar?: React.CSSProperties;
    heading?: React.CSSProperties;
    primary?: React.CSSProperties;
    children?: React.CSSProperties;
  };
};
