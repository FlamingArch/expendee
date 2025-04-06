type PropsSection = {
  heading?: string;
  innerPadding?: number;
  innerGap?: number;
  children?: React.ReactNode;
};

export default function Section(props: PropsSection) {
  return (
    <section className="flex flex-col">
      {props.heading && (
        <p className="text-sm font-bold p-4 pb-0">{props.heading}</p>
      )}
      <div
        style={{ padding: props.innerPadding ?? 16, gap: props.innerGap ?? 16 }}
        className="flex flex-col "
      >
        {props.children}
      </div>
    </section>
  );
}
