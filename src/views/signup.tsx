import React from "react";
import { Button, Page } from "../components";
import { IconApple, IconGoogle, IconMicrosoft } from "../components/Icons";
import { Sidebar } from "../fragments";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar />
      <Page style={{ width: 480 }} className="flex-grow-0" padding={12}>
        <div className="flex flex-col gap-6 flex-grow justify-center">
          <h3 className="text-2xl text-center">Sign Up</h3>

          <div className="font-bold">Enter your Email</div>
          <input type="email" placeholder="Email" />

          <div className="font-bold">
            Enter a unique User Name. You can set a display name later.
          </div>
          <input type="email" placeholder="Username" />

          <div className="font-bold">Chose a Strong Password</div>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat Password" />

          <div className="font-bold">Legalities</div>

          <Button buttonStyle="primary">Create Expendee ID</Button>

          <div className="flex gap-4 items-center">
            <input type="checkbox" />
            <p>
              I agree to the <a href="">Terms and Conditions</a> and{" "}
              <a href="">Privacy Policy</a>
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <input type="checkbox" />
            <p>
              Send me Email about new features and announcements.{" "}
              <span className="font-bold">I can unsubscribe any time.</span>
            </p>
          </div>

          <p className="text-center font-medium">Or Continue With</p>
          <div className="flex justify-center gap-4">
            <Button
              buttonStyle="primary"
              Icon={IconApple}
              className="bg-black"
              onClick={() => alert("Coming Soon")}
            />
            <Button
              buttonStyle="primary"
              Icon={IconGoogle}
              className="bg-white"
            />
            <Button
              buttonStyle="primary"
              Icon={IconMicrosoft}
              className="bg-white"
              onClick={() => alert("Coming Soon")}
            />
          </div>
          <hr />
          <p>Already Have an Account?</p>
          <Button
            buttonStyle="secondaryAccent"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </Button>
          <Button buttonStyle="secondaryAccent">
            <span className="font-bold">NEW!</span> Try Expendee without Account
          </Button>
        </div>
      </Page>
    </>
  );
}
