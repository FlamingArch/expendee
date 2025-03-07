type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Scaffold(props: Props) {
  let layoutStyles =
    "flex flex-col [&>*]:shrink-0 grow m-0 p-0 overflow-scroll";
  let colorStyles =
    "bg-scaffold-light dark:bg-scaffold-dark border-r border-gray-200 dark:border-gray-900 color-text-light dark:color-text-dark";

  return (
    <main className={`${layoutStyles} ${colorStyles} ${props.className}`}>
      {props.children}
    </main>
  );
}
