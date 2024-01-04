import { Playfair_Display as Heading } from "next/font/google"
import { RiAppleFill, RiFacebookCircleFill, RiGoogleFill, RiMicrosoftFill } from "@remixicon/react";

const headingFont = Heading({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="bg-black flex-grow hidden md:grid place-content-center">
        <h1 className={headingFont.className + " font-black text-white text-4xl"}>EXPENDEE</h1>
      </div>
      <main className="bg-scaffold overflow-scroll flex flex-col items-stretch p-6 gap-4 text-center md:max-w-[32rem] flex-grow">
        <div className="flex-grow" />
        <h1 className={headingFont.className + " font-black text-4xl md:hidden"}>EXPENDEE</h1>
        <p className="scaffold-header hidden md:inline">Sign In</p>
        <p className="section-header">Sign In With Your Expendee ID</p>
        <input type="email" className="input-primary" placeholder="Username or Email" />
        <input type="password" className="input-primary" placeholder="Password" />
        <button className="button-primary">Sign In</button>
        <p className="section-header">Or Sign In Via</p>
        <div className="flex gap-4">
          <button title="Sign In with Apple" className="bg-black hover:bg-gray-800 button-socials"><RiAppleFill size={24} color="white" /></button>
          <button title="Sign In with Google" className="bg-accent hover:bg-accentDark button-socials"><RiGoogleFill size={24} color="white" /></button>
          <button title="Sign In with Microsoft" className="bg-sky-500 hover:bg-sky-600 button-socials"><RiMicrosoftFill size={24} color="white" /></button>
          <button title="Sign In with Facebook" className="bg-blue-500 hover:bg-blue-600 button-socials"><RiFacebookCircleFill size={24} color="white" /></button>
        </div>
        <p className="section-header">Don't Have An Account?</p>
        <button className="button-secondary">Sign Up</button>
        <button className="button-secondary"><span className="font-black">NEW!</span> Try Expendee without Account</button>
        <div className="flex-grow" />
      </main >
    </>
  )
}
