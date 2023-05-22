import { PageProps } from "../types/page";
import React from "react";

export default function Page({
  appBar,
  bottomAppBar,
  children,
  title,
  cornerRadius,
  padding,
  margin,
  gap,
  backdrop,
  className,
  style,
  alwaysScroll,
}: PageProps) {
  if (title) document.title = title;

  const backdropStyles = {
    clear: "",
    solid: "bg-page",
    solidDark: "bg-black text-white",
    material: "backdrop-blur-xl backdrop-saturate-150 bg-white bg-opacity-70",
    materialDark:
      "backdrop-blur-xl backdrop-saturate-150 bg-black bg-opacity-70 text-white",
  };

  return (
    <main
      style={{
        borderRadius:
          typeof cornerRadius == "number"
            ? `${cornerRadius / 4}rem`
            : `${(cornerRadius?.topLeft ?? 0) / 4}rem ${
                (cornerRadius?.topRight ?? 0) / 4
              }rem ${(cornerRadius?.bottomLeft ?? 0) / 4}rem ${
                (cornerRadius?.bottomRight ?? 0) / 4
              }rem`,
        margin:
          typeof margin == "number"
            ? `${(margin ?? 0) / 4}rem`
            : `${(margin?.top ?? 0) / 4}rem ${(margin?.right ?? 0) / 4}rem ${
                (margin?.bottom ?? 0) / 4
              }rem ${(margin?.left ?? 0) / 4}rem`,
        ...style,
      }}
      className={`h-screen flex-grow ${
        alwaysScroll ? "overflow-auto" : "overflow-hidden hover:overflow-auto"
      } flex flex-col
        ${backdropStyles[backdrop ?? "solid"]} ${className}`}
    >
      {appBar}

      <article
        style={{
          padding:
            typeof padding == "number"
              ? `${(padding ?? 5) / 4}rem`
              : `${(padding?.top ?? (appBar ? 0 : 5)) / 4}rem ${
                  (padding?.right ?? 5) / 4
                }rem ${(padding?.bottom ?? (bottomAppBar ? 0 : 5)) / 4}rem ${
                  (padding?.left ?? 5) / 4
                }rem`,
          gap: `${(gap ?? 0) / 4}rem`,
        }}
        className="flex flex-col"
      >
        {children}
      </article>

      {bottomAppBar}
    </main>
  );
}
