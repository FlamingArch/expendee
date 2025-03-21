type Props = {
  children: React.ReactNode;
  className?: string;
  acrylic?: boolean;
};

export default function Scaffold(props: Props) {
  let layoutStyles =
    "flex flex-col [&>*]:shrink-0 grow m-0 p-0 overflow-scroll";
  let colorStyles =
    "border-r border-gray-900/10 text-text-light dark:text-text-dark";
  let blurStyles = props.acrylic
    ? "backdrop-blur-xl backdrop-saturate-150 bg-scaffold-light/60 dark:bg-scaffold-dark/60 "
    : "bg-scaffold-light dark:bg-scaffold-dark ";
  return (
    <main
      className={`${layoutStyles} ${colorStyles} ${blurStyles} ${props.className}`}
    >
      {props.children}
    </main>
  );
}
