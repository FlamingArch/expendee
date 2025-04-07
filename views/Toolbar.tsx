type Props = {
  children: React.ReactNode;
  className?: string;
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
  let layoutStyles = "flex p-1 items-center h-auto";

  return (
    <header
      className={`${layoutStyles} ${getStickStyles(props.position)} ${
        props.className
      }`}
    >
      {props.children}
    </header>
  );
}
