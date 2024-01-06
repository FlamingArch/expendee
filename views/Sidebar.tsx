import { Playfair_Display as Heading } from "next/font/google"
const headingFont = Heading({ subsets: ['latin'] })

type TitleSidebarProps = {
  title?: string
  titleBrandingFont?: boolean
  centered?: boolean
}


export default function TitleSidebar(props: TitleSidebarProps) {
  const fontClass = props.titleBrandingFont ? `${headingFont.className} uppercase` : ""
  const centerClass = props.centered ? "place-content-center" : ""
  return <section className={"bg-black flex flex-col flex-grow " + centerClass}>
    {props.title && <h1 className={fontClass + " font-black text-white text-4xl w-min text-center"}>{props.title}</h1>}
  </section>
}
