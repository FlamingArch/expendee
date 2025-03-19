type Props = {
  children: React.ReactNode;
  width?: number;
  collapsed?: boolean;
  className?: string;
};

export default function Sidebar(props: Props) {
  return (
    <aside
      style={{ width: props.collapsed ? 0 : props.width ?? "280px" }}
      className={"flex flex-col border-r border-gray-900 " + props.className}
    >
      {props.children}
    </aside>
  );
}
