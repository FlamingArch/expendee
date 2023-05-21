import { IconProps } from "@/src/types/Icon";

type ButtonProps =
  | {
      label?: React.ReactNode;
      Icon?: React.FunctionComponent<IconProps>;
      trailing?: React.ReactNode;
      children?: React.ReactNode;
      styles?: React.CSSProperties;
      className?: string;
      buttonStyle?: ButtonStyles;
    } & Omit<Omit<React.HTMLProps<HTMLButtonElement>, "className">, "type">;

type ButtonStyles = "navLink" | "navLinkSelected";

const buttonStyleClasses = {
  navLink: {
    button:
      "bg-[#72798D] transition bg-opacity-[0.32] hover:bg-opacity-50 p-5 rounded-2xl flex font-medium backdrop-blur-lg backdrop-saturate-[1.125] hover:shadow-xl gap-2 items-center",
    iconContainer: "",
    icon: "fill-white w-6 h-6",
  },
  navLinkSelected: {
    button:
      "bg-white text-black p-5 rounded-2xl flex font-medium shadow-xl gap-2 items-center",
    iconContainer: "",
    icon: "fill-black w-6 h-6",
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
  const buttonStyleProp = buttonStyle ?? "navLink";

  const elementIcon = Icon && (
    <section className={buttonStyleClasses[buttonStyleProp].iconContainer}>
      <Icon className={buttonStyleClasses[buttonStyleProp].icon} />
    </section>
  );

  const elementLabel = label && (
    <section className="label-container">
      <p className="label">{label}</p>
    </section>
  );

  const elementTrailing = trailing && (
    <div className="trailing-container">{trailing}</div>
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
