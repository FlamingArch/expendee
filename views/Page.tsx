type PageProps = {
  toolbar?: React.ReactNode;
  children?: React.ReactNode;
  backdrop?: "acrylic";
} & React.HTMLAttributes<HTMLDivElement>;

function getAcrylicBackdrop() {
  return "backdrop-blur-2xl backdrop-saturate-0";
}

export default function Page({
  toolbar,
  children,
  backdrop,
  className,
  ...props
}: PageProps) {
  return (
    <main
      {...props}
      className={`bg-scaffold border-r border-slate-200 dark:border-slate-900 text-text ${
        className ?? ""
      }`}
    >
      {toolbar}
      <div className="">{children}</div>
    </main>
  );
}
