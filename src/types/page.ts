export type PageProps = {
  appBar?: React.ReactNode;
  bottomAppBar?: React.ReactNode;
  children?: React.ReactNode;
  title?: string;
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
  backdrop?: "clear" | "material" | "materialDark" | "solid" | "solidDark";
  className?: string;
  style?: React.CSSProperties;
  alwaysScroll?: boolean;
};
