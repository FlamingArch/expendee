import { Playfair_Display } from "next/font/google";
import google from "./google.svg";
import apple from "./apple.svg";
import microsoft from "./microsoft.svg";
import Image from "next/image";

const brandingFont = Playfair_Display({ subsets: ["latin"] });

export default function SignInPage() {
  return (
    <>
      <div className="flex-grow hidden md:flex" /> 
      <main className="justify-center">
        <form className="sm:self-center sm:w-96">
          <h1 className={`${brandingFont.className} font-black uppercase`}>
            Expendee
          </h1>
          <fieldset>
            <h2>Sign in with your Expendee ID</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign in</button>
          </fieldset>
          <fieldset>
            <h2>Or Continue Via</h2>
            <section className="flex gap-4 self-stretch">
              <button className="flex-grow aspect-square bg-black text-white grid place-content-center">
                <Image src={apple} alt="Apple" width={24} height={24} />
              </button>
              <button className="flex-grow aspect-square bg-blue-600 text-white grid place-content-center">
                <Image src={google} alt="Apple" width={24} height={24} />
              </button>
              <button className="flex-grow aspect-square bg-[#0088FF] text-white grid place-content-center">
                <Image src={microsoft} alt="Apple" width={24} height={24} />
              </button>
            </section>
          </fieldset>
          <fieldset>
            <h2>Don't Have An Account?</h2>
            <button>Sign Up</button>
          </fieldset>
        </form>
      </main>
    </>
  );
}
