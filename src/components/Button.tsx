import { ButtonProps } from "../types/button";

const buttonStyleClasses = {
  navLink: {
    button:
      "bg-[#72798D] transition bg-opacity-[0.32] hover:bg-opacity-50 p-5 rounded-2xl flex font-medium backdrop-blur-lg backdrop-saturate-[1.125] hover:shadow-xl gap-2 items-center",
    iconContainer: "",
    labelContainer: "",
    label: "",
    icon: "fill-white w-6 h-6",
    trailingContainer: "",
  },
  navLinkSelected: {
    button:
      "bg-white text-black p-5 rounded-2xl flex font-medium shadow-xl gap-2 items-center cursor-default",
    iconContainer: "",
    labelContainer: "",
    label: "",
    icon: "fill-black w-6 h-6",
    trailingContainer: "",
  },
  primary: {
    button:
      "transition bg-accent hover:bg-accent-dark text-white p-3 rounded-xl flex font-medium gap-2 items-center justify-center",
    iconContainer: "",
    labelContainer: "",
    label: "",
    icon: "fill-white w-6 h-6",
    trailingContainer: "",
  },
  secondary: {
    button:
      "transition bg-element dark:bg-element-dark hover:brightness-[0.95] text-text dark:text-text-dark p-3 gap-2 flex font-medium items-center rounded-xl justify-center",
    iconContainer: "",
    labelContainer: "",
    label: "",
    icon: "w-6 h-6 fill-text dark:fill-text-dark",
    trailingContainer: "",
  },
  secondaryAccent: {
    button:
      "transition bg-accent dark:bg-accent-dark bg-opacity-10 hover:brightness-[0.95] text-accent dark:text-accent-dark p-3 gap-2 flex font-medium items-center rounded-xl justify-center",
    iconContainer: "",
    labelContainer: "",
    label: "",
    icon: "w-6 h-6 fill-text dark:fill-text-dark",
    trailingContainer: "",
  },
  action: {
    button:
      "hover:bg-slate-200 dark:hover:bg-slate-800 p-3 rounded-xl flex font-medium gap-2 items-center",
    iconContainer: "",
    labelContainer: "",
    label: "",
    icon: "w-6 h-6 fill-text dark:fill-text-dark",
    trailingContainer: "",
  },
  actionSidebar: {
    button:
      "flex gap-2 font-medium items-center rounded-full bg-accent bg-opacity-20 justify-center p-1 px-3 hover:brightness-125",
    iconContainer: "",
    labelContainer: "",
    label: "text-accent uppercase",
    icon: "fill-accent w-4 h-4",
    trailingContainer: "",
  },
};

export default function Button({
  label,
  Icon,
  trailing,
  children,
  styles,
  className,
  buttonStyle,
  ...rest
}: ButtonProps) {
  const buttonStyleProp = buttonStyle ?? "secondary";

  const elementIcon = Icon && (
    <section className={buttonStyleClasses[buttonStyleProp].iconContainer}>
      <Icon className={buttonStyleClasses[buttonStyleProp].icon} />
    </section>
  );

  const elementLabel = label && (
    <section className={buttonStyleClasses[buttonStyleProp].labelContainer}>
      <p className={buttonStyleClasses[buttonStyleProp].label}>{label}</p>
    </section>
  );

  const elementTrailing = trailing && (
    <div className={buttonStyleClasses[buttonStyleProp].trailingContainer}>
      {trailing}
    </div>
  );

  return (
    <button
      className={`${buttonStyleClasses[buttonStyleProp].button} ${className}`}
      {...rest}
    >
      {elementIcon}
      {elementLabel}
      {elementTrailing}
      {children}
    </button>
  );
}
