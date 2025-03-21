type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Scaffold(props: Props) {
  let layoutStyles =
    "flex flex-col [&>*]:shrink-0 grow m-0 p-0 overflow-scroll";
  let colorStyles =
    "bg-scaffold-light dark:bg-scaffold-dark border-r border-gray-900/10 dark:border-gray-900 text-text-light dark:text-text-dark";

  return (
    <main className={`${layoutStyles} ${colorStyles} ${props.className}`}>
      {props.children}
    </main>
  );
}
