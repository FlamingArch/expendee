// import React, { ButtonHTMLAttributes } from "react";
// import { IconProps } from "./Icons";

import { IconProps } from "./Icons";

type ButtonStyles =
  | "sidebar"
  | "toolbar"
  | "primary"
  | "secondary"
  | "emphasis";

type ButtonProps = {
  Icon?: React.FunctionComponent<IconProps>;
  label?: string;
  buttonStyle?: ButtonStyles;
} & Omit<React.ComponentProps<"button">, "children">;

const buttonStyles = {
  sidebar: {
    button:
      "flex items-center px-3 py-2 gap-2 text-accent rounded-full bg-accent bg-opacity-20 hover:bg-opacity-40 transition-colors uppercase font-medium",
    icon: "w-4 h-4 fill-accent",
  },
  toolbar: {
    button:
      "hover:bg-gray-200 rounded-xl p-3 flex items-center font-medium gap-2 transition-colors",
    icon: "w-6 h-6",
  },
};

function getButtonStyles(style?: ButtonStyles) {
  switch (style) {
    case "sidebar":
      return buttonStyles.sidebar;
    case "toolbar":
    default:
      return buttonStyles.toolbar;
  }
}

export default function Button({
  Icon,
  label,
  buttonStyle,
  ...rest
}: ButtonProps) {
  const styles = getButtonStyles(buttonStyle);

  return (
    <button className={styles.button} {...rest}>
      {Icon && <Icon className={styles.icon} />}
      {label}
    </button>
  );
}
