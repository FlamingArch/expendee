type PropsPage = {
  toolbar?: React.ReactNode;
  children: React.ReactNode;
};

export default function Page(props: PropsPage) {
  return (
    <main>
      {props.toolbar}
      {props.children}
    </main>
  );
}
