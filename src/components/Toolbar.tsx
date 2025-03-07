type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Toolbar(props: Props) {
  return (
    <header className={"flex p-2 items-center " + props.className}>
      {props.children}
    </header>
  );
}
