import { Playfair_Display as Heading } from "next/font/google"

const headingFont = Heading({ subsets: ['latin'] })

type PageProps = {
  children: React.ReactNode
  header?: string // Shown in desktop sizes
  sidebarHeader?: string  // Shown in mobile sizes
  center?: boolean
  className?: string
}

export default function Page(props: PageProps) {
  return <main>
    {props.children}
  </main >
}

// className = { "bg-scaffold overflow-scroll flex flex-col items-stretch flex-grow " + props.className }
