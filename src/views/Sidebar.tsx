type Props = {
  children?: React.ReactNode;
  width?: number | "full" | null;
};

export default function Sidebar(props: Props) {
  let alignmentStyles = "flex flex-col justify-center items-center";

  let widthStyles =
    props.width === "full"
      ? { flexGrow: "1" }
      : {
          width: `${props.width ?? 280}px`,
        };

  return (
    <aside style={widthStyles} className={`${alignmentStyles} ${widthStyles}`}>
      {props.children}
    </aside>
  );
}
