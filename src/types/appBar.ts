export type AppBarProps = {
  leading?: React.ReactNode;
  title?: React.ReactNode;
  heading?: React.ReactNode;
  actions?: React.ReactNode | React.ReactNode[];
  center?: React.ReactNode | React.ReactNode;
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
};
