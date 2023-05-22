import { SectionProps } from "../types/section";
import React from "react";

export default function Section({
  heading,
  actions,
  footer,
  secondaryActions,
  children,
  cornerRadius,
  padding,
  margin,
  gap,
  backdrop,
  className,
  style,
  elevated,
}: SectionProps) {
  const backdropStyles = {
    clear: "",
    solid: "bg-page",
    solidDark: "bg-black",
    material: "backdrop-blur-xl backdrop-saturate-150 bg-white bg-opacity-70",
    materialDark:
      "backdrop-blur-xl backdrop-saturate-150 bg-black bg-opacity-70 text-white",
  };

  return (
    <section
      style={{
        margin:
          typeof margin == "number"
            ? `${(margin ?? 0) / 4}rem`
            : `${(margin?.top ?? 0) / 4}rem ${(margin?.right ?? 0) / 4}rem ${
                (margin?.bottom ?? 0) / 4
              }rem ${(margin?.left ?? 0) / 4}rem`,
        gap: `${(gap ?? 0) / 4}rem`,
        ...style,
      }}
      className={`flex flex-col`}
    >
      <div className="flex items-center justify-between">
        <p className="font-bold uppercase">{heading}</p>
        <div className="flex items-center">{actions}</div>
      </div>
      <div
        style={{
          borderRadius:
            typeof cornerRadius == "number"
              ? `${cornerRadius / 4}rem`
              : `${(cornerRadius?.topLeft ?? 4) / 4}rem ${
                  (cornerRadius?.topRight ?? 4) / 4
                }rem ${(cornerRadius?.bottomLeft ?? 4) / 4}rem ${
                  (cornerRadius?.bottomRight ?? 4) / 4
                }rem`,
          padding:
            typeof padding == "number"
              ? `${(padding ?? 3) / 4}rem`
              : `${(padding?.top ?? 3) / 4}rem ${
                  (padding?.right ?? 3) / 4
                }rem ${(padding?.bottom ?? 3) / 4}rem ${
                  (padding?.left ?? 3) / 4
                }rem`,
          gap: `${(gap ?? 0) / 4}rem`,
        }}
        className={`flex flex-col overflow-hidden
        ${backdropStyles[backdrop ?? "clear"]} ${
          elevated ? "shadow-lg" : ""
        } ${className}`}
      >
        {children}
      </div>
      <div className="flex items-center justify-between">
        {footer}
        <div className="flex items-center">{secondaryActions}</div>
      </div>
    </section>
  );
}
