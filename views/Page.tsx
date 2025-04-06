type HomeProps = {
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
  ...props
}: HomeProps) {
  return (
    <main {...props}>
      {toolbar}
      {children}
    </main>
  );
}
