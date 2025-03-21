type Props = {
  children: React.ReactNode;
  width?: number;
  collapsed?: boolean;
  className?: string;
  acrylic?: boolean;
};

export default function Sidebar(props: Props) {
  let colorStyles =
    "border-r border-gray-900/10 text-text-light dark:text-text-dark";
  let blurStyles = props.acrylic
    ? "backdrop-blur-xl backdrop-saturate-150 bg-scaffold-light/80 dark:bg-scaffold-dark/80"
    : "bg-scaffold-light dark:bg-scaffold-dark";
  return (
    <aside
      style={{ width: props.collapsed ? 0 : props.width ?? "280px" }}
      className={`flex flex-col ${colorStyles} overflow-x-hidden ${blurStyles} ${props.className}`}
    >
      {props.children}
    </aside>
  );
}
