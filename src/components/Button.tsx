type Props = {
  children?: React.ReactNode;
  icon?: (props: any) => React.ReactNode;
  className?: string;
  iconClassName?: string;
} & React.DOMAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  const { children, icon, className, iconClassName, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={
        "p-3 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors " +
        className
      }
    >
      {props.icon && <props.icon className={"w-5 h-5 " + iconClassName} />}
      {children}
    </button>
  );
}
