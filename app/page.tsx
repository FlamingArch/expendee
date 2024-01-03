import { Playfair_Display as Heading } from "next/font/google"


const headingFont = Heading({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch justfy-center p-6 gap-4">
      <h1 className={headingFont.className + " font-black text-3xl text-center"}>EXPENDEE</h1>
      <p className="font-bold opacity-60 text-center">Sign In With Your Expendee ID</p>
      <input type="email" className="p-4 rounded-xl" placeholder="Username or Email" />
      <input type="password" className="p-4 rounded-xl" placeholder="Password" />
      <p className="font-bold opacity-60 text-center">Or Sign In Via</p>
      <div className="flex gap-4">
        <div className="bg-accent rounded-xl w-full aspect-square"></div>
        <div className="bg-blue-600 rounded-xl w-full aspect-square"></div>
        <div className="bg-blue-600 rounded-xl w-full aspect-square"></div>
        <div className="bg-blue-600 rounded-xl w-full aspect-square"></div>
      </div>
      <p className="font-bold opacity-60 text-center">Don't Have An Account?</p>
    </main >
  )
}
