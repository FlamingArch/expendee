import React from "react";
import { AppBarProps } from "../types/appBar";

const appBarStylesClasses = {
  root: "",
  container: "flex flex-col",
  toolbar: "flex flex-row items-center",
  leading: "",
  title: "font-medium",
  center: "flex-grow flex items-center justify-center",
  actions: "flex",
  primaryBar: "flex items-center",
  heading: "flex text-xl flex-grow font-medium",
  primary: "p-3",
  backdrop: {
    clear: "",
    gradient: "bg-gradient-to-b from-page dark:from-page-dark to-transparent",
    gradientReverse:
      "bg-gradient-to-b from-page-dark dark:from-page to-transparent",
    gradientBlack: "bg-gradient-to-b from-page-dark to-transparent",
    material: "backdrop-blur-xl backdrop-saturate-150",
    materialShadow: "backdrop-blur-xl backdrop-saturate-150 shadow-xl",
    solid: "bg-page dark:bg-page-dark",
    shadow: "bg-page dark:bg-page-dark shadow-xl",
  },
};

export default function AppBar({
  leading,
  title,
  center,
  actions,
  heading,
  primary,
  children,
  responsive,
  sticky,
  backdrop,
  background,
  className,
  cornerRadius,
  padding,
  margin,
  gap,
  style,
  classNames,
  styles,
}: AppBarProps) {
  const containerStyles = {
    borderRadius:
      typeof cornerRadius == "number"
        ? `${cornerRadius / 4}rem`
        : `${(cornerRadius?.topLeft ?? 0) / 4}rem ${
            (cornerRadius?.topRight ?? 0) / 4
          }rem ${(cornerRadius?.bottomLeft ?? 0) / 4}rem ${
            (cornerRadius?.bottomRight ?? 0) / 4
          }rem`,
    padding:
      typeof padding == "number"
        ? `${(padding ?? 1) / 4}rem`
        : `${(padding?.top ?? 1) / 4}rem ${(padding?.right ?? 1) / 4}rem ${
            (padding?.bottom ?? 1) / 4
          }rem ${(padding?.left ?? 1) / 4}rem`,
    margin:
      typeof margin == "number"
        ? `${(margin ?? 0) / 4}rem`
        : `${(margin?.top ?? 0) / 4}rem ${(margin?.right ?? 0) / 4}rem ${
            (margin?.bottom ?? 0) / 4
          }rem ${(margin?.left ?? 0) / 4}rem`,
    gap: gap ?? `0.5rem`,
    ...styles?.container,
  };

  const responsiveStylesContainer = responsive ? "md:w-2/3 lg:w-1/2" : "";
  const responsiveStylesRoot = responsive ? "flex md:justify-center" : "";

  const stickyStyles = sticky
    ? `sticky ${sticky == "bottom" ? "bottom-0" : "top-0"}`
    : "";

  const toolbar = (
    <section
      style={{ gap: gap ?? `0.5rem` }}
      className={`${`${appBarStylesClasses.toolbar} ${classNames?.toolbar}`} ${
        classNames?.toolbar
      }`}
    >
      <div
        style={{ gap: gap, ...styles?.leading }}
        className={`${appBarStylesClasses.leading} ${classNames?.leading}`}
      >
        {leading}
      </div>
      <div
        style={{ gap: gap, ...styles?.title }}
        className={`${appBarStylesClasses.title} ${classNames?.title}`}
      >
        {title}
      </div>
      <div
        style={{ gap: gap, ...styles?.center }}
        className={`${appBarStylesClasses.center} ${classNames?.center}`}
      >
        {center}
      </div>
      <div
        style={{ gap: gap, ...styles?.actions }}
        className={`${appBarStylesClasses.actions} ${classNames?.actions}`}
      >
        {actions}
      </div>
    </section>
  );

  const primaryBar = (
    <section
      style={{ gap: gap ?? `0.5rem`, ...styles?.primaryBar }}
      className={`${appBarStylesClasses.primaryBar} ${classNames?.primaryBar}`}
    >
      <h3
        style={{
          gap: gap ?? `0.5rem`,
          ...styles?.heading,
          padding: `0.75rem`,
        }}
        className={`${appBarStylesClasses.heading} ${classNames?.heading}`}
      >
        {heading}
      </h3>
      <main
        style={{ gap: gap ?? `0.5rem`, ...styles?.primary }}
        className={`${appBarStylesClasses.primary} ${classNames?.primary}`}
      >
        {primary}
      </main>
    </section>
  );

  return (
    <header
      style={{
        ...styles?.root,
        ...style,
      }}
      className={`${appBarStylesClasses.root} ${
        classNames?.root
      } ${className} ${responsiveStylesRoot} ${stickyStyles} ${
        sticky === "bottom"
          ? appBarStylesClasses.backdrop[backdrop ?? "material"].replace(
              "bg-gradient-to-b ",
              "bg-gradient-to-t "
            )
          : appBarStylesClasses.backdrop[backdrop ?? "material"]
      }`}
    >
      <div
        style={containerStyles}
        className={`${appBarStylesClasses.container} ${
          classNames?.container
        } ${responsiveStylesContainer} ${
          sticky === "bottom"
            ? appBarStylesClasses.backdrop[background ?? "material"].replace(
                "bg-gradient-to-b ",
                "bg-gradient-to-t "
              )
            : appBarStylesClasses.backdrop[background ?? "material"]
        }}`}
      >
        {toolbar}
        {primaryBar}
        {children}
      </div>
    </header>
  );
}
