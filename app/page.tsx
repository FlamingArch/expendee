import { Playfair_Display as Heading } from "next/font/google"
import { RiAppleFill, RiFacebookCircleFill, RiGoogleFill, RiMicrosoftFill } from "@remixicon/react";
import { getCurrentUser } from "./firebase";
import Link from "next/link";

const headingFont = Heading({ subsets: ['latin'] })

const currentUser = getCurrentUser()

export default function Home() {
  return (
    <div className="bg-black text-white flex-grow grid place-content-center gap-6">
      <h1 className={headingFont.className + " font-black text-white text-4xl"}>EXPENDEE</h1>
      {currentUser ? "Hello, " : <Link href="/signin" className="button-primary">Sign In</Link>}
    </div>
  )
}
