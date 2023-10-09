import React from "react";

export type SectionProps = {
  heading?: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  secondaryActions?: React.ReactNode;
  children?: React.ReactNode;
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
  elevated?: boolean;
  style?: React.CSSProperties;
};
