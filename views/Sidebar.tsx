import { Playfair_Display as Branding } from "next/font/google"

const brandingFont = Branding({ subsets: ['latin'] })

type SidebarProps = {
  title?: string
  titleBrandingFont?: boolean
  centered?: boolean
  children?: React.ReactNode
  width?: number | string
  className?: string
}

export default function Sidebar(props: SidebarProps) {
  let containerStyles = "flex-grow "
    + "min-h-screen overflow-x-hidden "
    + "flex flex-col "
    + "p-6 gap-4 "
    + props.className
  let headingStyles = "text-2xl text-center p-6 "

  if (props.titleBrandingFont) {
    headingStyles += brandingFont.className
    headingStyles += " font-black uppercase"
  }

  return (
    <section style={{ maxWidth: props.width }} className={containerStyles}>
      <h1 className={headingStyles}>{props.title}</h1>
      {props.children}
    </section>
  )
}
