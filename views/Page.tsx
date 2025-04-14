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
      className={`bg-slate-400 border-r border-slate-200 ${
        className ?? ""
      }`}
    >
      {toolbar}
      <div className="">{children}</div>
    </main>
  );
}
