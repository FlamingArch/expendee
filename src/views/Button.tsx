// import React, { ButtonHTMLAttributes } from "react";
// import { IconProps } from "./Icons";

import { IconProps } from "./Icons";

type ButtonStyles =
  | "sidebar"
  | "toolbar"
  | "navigation"
  | "navigationSelected"
  | "primary"
  | "secondary"
  | "emphasis";

type ButtonProps = {
  Icon?: React.FunctionComponent<IconProps>;
  label?: string;
  buttonStyle?: ButtonStyles;
  children?: React.ReactNode;
  className?: string;
} & Omit<Omit<React.ComponentProps<"button">, "children">, "children">;

const buttonStyles = {
  sidebar: {
    button:
      "flex items-center px-3 py-2 gap-2 text-accent rounded-full bg-accent bg-opacity-20 hover:bg-opacity-40 transition-colors uppercase font-medium",
    icon: "w-4 h-4 fill-accent",
  },
  toolbar: {
    button:
      "hover:bg-gray-500 hover:bg-opacity-20 rounded-xl p-3 flex items-center font-medium gap-2 transition-colors",
    icon: "w-6 h-6",
  },
  primary: {
    button:
      "bg-accent rounded-xl p-3 flex items-center justify-center text-white gap-2 font-medium",
    icon: "w-6 h-6 fill-white",
  },
  navigation: {
    button:
      "flex items-center fill-white text-white font-medium bg-[#72798D] bg-opacity-20 p-6 gap-4 hover:bg-opacity-30 rounded-2xl",
    icon: "w-6 h-6",
  },
  navigationSelected: {
    button:
      "flex items-center fill-black text-black font-medium bg-white p-6 gap-4 rounded-2xl shadow-[#AAA2] shadow-xl",
    icon: "w-6 h-6",
  },
};

function getButtonStyles(style?: ButtonStyles) {
  switch (style) {
    case "sidebar":
      return buttonStyles.sidebar;
    case "toolbar":
      return buttonStyles.toolbar;
    case "navigation":
      return buttonStyles.navigation;
    case "navigationSelected":
      return buttonStyles.navigationSelected;
    case "primary":
    default:
      return buttonStyles.primary;
  }
}

export default function Button({
  Icon,
  label,
  buttonStyle,
  children,
  className,
  ...rest
}: ButtonProps) {
  const styles = getButtonStyles(buttonStyle);

  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {Icon && <Icon className={styles.icon} />}
      {label}
      {children}
    </button>
  );
}
