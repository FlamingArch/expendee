import { Manrope } from 'next/font/google'

const globalFont = Manrope({ subsets: ['latin'] })

type ScaffoldProps = {
  children?: React.ReactNode,
  globalFontClass?: string
}

export default function Scaffold(props: ScaffoldProps) {
  let bodyStyle = ""
    + "flex md:flex-row flex-col "
    + "h-screen w-screen "
    + "text-black bg-page "
    + "md:text-white md:bg-black "

  if (props.globalFontClass) {
    bodyStyle += props.globalFontClass
  }

  return (
    <html lang="en">
      <body className={`${globalFont.className} ${bodyStyle}`}>
        {props.children}
      </body>
    </html>
  );
}
