import { PageProps } from "../types/page";
import React from "react";

export default function Page({
  appBar,
  bottomAppBar,
  children,
  width,
  title,
  cornerRadius,
  padding,
  margin,
  gap,
  backdrop,
  className,
  style,
  alwaysScroll,
  adjustPaddingForAppBar,
}: PageProps) {
  if (title) document.title = title;

  const adjustPaddingForAppBarProps = adjustPaddingForAppBar ?? true;

  const backdropStyles = {
    clear: "",
    solid:
      "bg-page dark:bg-page-dark text-text dark:text-text-dark border-r border-slate-200 dark:border-slate-800",
    solidDark: "bg-black text-white border-r border-slate-800",
    material:
      "backdrop-blur-xl backdrop-saturate-150 bg-white bg-opacity-70 dark:bg-page-dark text-text dark:text-text-dark border-r border-slate-200 dark:border-slate-800",
    materialDark:
      "backdrop-blur-xl backdrop-saturate-150 bg-black bg-opacity-70 text-white border-r border-slate-200 dark:border-slate-800",
  };

  return (
    <main
      style={{
        width: width,
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
      className={`h-screen ${width ? "" : "flex-grow"} ${
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
              : `${
                  (padding?.top ?? adjustPaddingForAppBarProps
                    ? appBar
                      ? 0
                      : 5
                    : 5) / 4
                }rem ${(padding?.right ?? 5) / 4}rem ${
                  (padding?.bottom ?? adjustPaddingForAppBarProps
                    ? bottomAppBar
                      ? 0
                      : 5
                    : 5) / 4
                }rem ${(padding?.left ?? 5) / 4}rem`,
          gap: `${(gap ?? 0) / 4}rem`,
        }}
        className="flex flex-col flex-grow"
      >
        {children}
      </article>

      {bottomAppBar}
    </main>
  );
}
