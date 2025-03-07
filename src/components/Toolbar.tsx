type Props = {
  children: React.ReactNode;
  className?: string;
  position?: "top" | "bottom";
};

export default function Toolbar(props: Props) {
  let stickStyles =
    props.position === "top"
      ? "sticky top-0 backdrop-blur-lg bg-scaffold-light/60"
      : props.position === "bottom"
      ? "sticky bottom-0 backdrop-blur-lg bg-scaffold-light/60"
      : "";
  let layoutStyles = "flex p-2 items-center h-auto";

  return (
    <header className={`${layoutStyles} ${stickStyles} ${props.className}`}>
      {props.children}
    </header>
  );
}
