type Props = {
  children?: React.ReactNode;
  padding?: number;
  width?: number;
  heading?: string;
  className?: string;
  contentClassName?: string;
};

export default function Page(props: Props) {
  let colorStyles =
    "bg-page dark:bg-pageDark text-pageContent dark:text-pageContentDark";
  let growStyles = typeof props.width === "number" ? "" : "flex-grow";
  return (
    <main
      style={{ width: props.width ? `${props.width}px` : undefined }}
      className={`${colorStyles} flex flex-col ${growStyles} ${props.className}`}
    >
      {props.heading && (
        <h1 className="text-2xl h-[30vh] max-h-[300px] grid place-content-center">
          {props.heading}
        </h1>
      )}
      <article
        style={{ padding: `${(props.padding ?? 4) * 4}px` }}
        className={`flex flex-col ${props.contentClassName}`}
      >
        {props.children}
      </article>
    </main>
  );
}
