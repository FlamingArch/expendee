type ButtonProps = {
  children?: React.ReactNode;
  icon?: (props: any) => React.ReactNode;
  className?: string;
  iconClassName?: string;
} & React.DOMAttributes<HTMLButtonElement>;

type ButtonIconProps = {
  icon: (props: any) => React.ReactNode;
  iconClassName?: string;
};

function ButtonIcon(props: ButtonIconProps) {
  return <props.icon className={"w-5 h-5 text-text " + props.iconClassName} />;
}

export default function Button(props: ButtonProps) {
  const { children, icon, className, iconClassName, ...btnProps } = props;
  return (
    <button
      {...btnProps}
      className={
        "p-3 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors " +
        className
      }
    >
      {props.icon && <ButtonIcon icon={icon!} iconClassName={iconClassName} />}
      {children}
    </button>
  );
}
