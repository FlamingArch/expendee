type Props = {
  children?: React.ReactNode;
  className?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  position?: "top" | "bottom";
};

function getStickStyles(position?: "top" | "bottom") {
  if (position === undefined || position === null) return "";
  let stickStyles =
    "backdrop-blur-lg bg-scaffold-light/60 dark:bg-scaffold-dark/60 dark:text-white ";

  if (position === "top") {
    stickStyles += "sticky top-0";
  } else if (position === "bottom") {
    stickStyles += "sticky bottom-0";
  }
  return stickStyles;
}

export default function Toolbar(props: Props) {
  let layoutStyles = "flex p-1 items-stretch h-auto flex-col";

  return (
    <header
      className={`${layoutStyles} ${getStickStyles(props.position)} ${
        props.className
      }`}
    >
      {(props.leading || props.trailing) && (
        <div className="flex gap-1">
          {props.leading}
          <div className="grow"></div>
          {props.trailing}
        </div>
      )}
      {props.children}
    </header>
  );
}
