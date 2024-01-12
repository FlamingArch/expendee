type PageProps = {
  children?: React.ReactNode
  header?: string // Shown in desktop sizes
  center?: boolean
  className?: string
  sidebarHeader?: string  // Shown in mobile sizes
  title?: string
  width?: number | string
}

export default function Page(props: PageProps) {
  let containerStyles = ""
    + "flex flex-col "
    + "bg-page text-black "
    + "flex-grow "
    + props.className

  let pageHeaderStyles = "text-xl p-4"

  return (
    <main style={{ maxWidth: props.width }} className={containerStyles}>
      <h2 className={pageHeaderStyles}>{props.title}</h2>
      {props.children}
    </main>
  )
}
