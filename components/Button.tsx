import { IconProps } from "@/types/Icon";

type ButtonProps =
  | {
      label?: React.ReactNode;
      Icon?: React.FunctionComponent<IconProps>;
      trailing?: React.ReactNode;
      children?: React.ReactNode;
      styles?: React.CSSProperties;
      className?: string;
    } & Omit<React.HTMLProps<HTMLButtonElement>, "className">;

const buttonStyleClasses = {
  navLink: {
    button:
      "bg-[#72798D] transition bg-opacity-[0.32] hover:bg-opacity-50 p-5 rounded-2xl flex font-medium backdrop-blur-lg backdrop-saturate-[1.125] hover:shadow-xl gap-2 items-center",
    iconContainer: "",
    icon: "fill-white w-5 h-5",
  },
};

export default function Button({
  label,
  Icon,
  trailing,
  children,
  styles,
  className,
  ...rest
}: ButtonProps) {
  const buttonStyle = "navLink";

  const elementIcon = Icon && (
    <section className={buttonStyleClasses[buttonStyle].iconContainer}>
      <Icon className={buttonStyleClasses[buttonStyle].icon} />
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
      className={`${buttonStyleClasses[buttonStyle].button} ${className}`}
      {...rest}
    >
      {elementIcon}
      {elementLabel}
      {elementTrailing}
      {children}
    </button>
  );
}
