type Props = {
  children?: React.ReactNode;
  icon?: (props: any) => React.ReactNode;
  className?: string;
  iconClassName?: string;
} & React.DOMAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className={
        "p-3 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors " +
        props.className
      }
    >
      {props.icon && (
        <props.icon className={"w-5 h-5 " + props.iconClassName} />
      )}
      {props.children}
    </button>
  );
}
