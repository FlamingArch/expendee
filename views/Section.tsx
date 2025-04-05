type PropsSection = {
  heading?: string;
  children?: React.ReactNode;
};

export default function Section(props: PropsSection) {
  return (
    <section>
      {props.heading && <p>{props.heading}</p>}
      {props.children}
    </section>
  );
}
