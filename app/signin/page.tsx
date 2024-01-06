"use client";
import {
  RiAppleFill,
  RiFacebookCircleFill,
  RiGoogleFill,
  RiMicrosoftFill,
} from "@remixicon/react";

function SocialSignIn() {
  return (
    <>
      <p className="section-header">Or Sign In Via</p>
      <div className="flex gap-4">
        <button title="Sign In with Apple" className="bg-black hover:bg-gray-800 button-socials">
          <RiAppleFill size={24} color="white" />
        </button>
        <button title="Sign In with Google" className="bg-accent hover:bg-accentDark button-socials">
          <RiGoogleFill size={24} color="white" />
        </button>
        <button title="Sign In with Microsoft" className="bg-sky-500 hover:bg-sky-600 button-socials">
          <RiMicrosoftFill size={24} color="white" />
        </button>
        <button title="Sign In with Facebook" className="bg-blue-500 hover:bg-blue-600 button-socials">
          <RiFacebookCircleFill size={24} color="white" />
        </button>
      </div>
    </>
  );
}

export default function Page() {
  return (
    <input type="email" className="input-primary" placeholder="Username or Email" />

  );
}

{/* <Section header="Sign In With Your Expendee ID">
  <input type="password" className="input-primary" placeholder="Password" />
  <Button
    label="Sign In"
    onClick={() => {
      alert("Button Works");
    }}
  />
</Section> */}
