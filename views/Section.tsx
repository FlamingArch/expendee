type SectionProps = {
  children?: React.ReactNode,
  header?: string,
  footer?: string,
}

export default function Section(props: SectionProps) {
  return <section className="flex flex-col px-4 py-2 gap-4">
    <p className="font-bold opacity-60">{props.header}</p>
    {props.children}
    <p className="opacity-60">{props.footer}</p>
  </section>
}
