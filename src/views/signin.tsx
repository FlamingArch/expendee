import React from "react";
import { Button, Page } from "../components";
import { IconApple, IconGoogle, IconMicrosoft } from "../components/Icons";
import { Sidebar } from "../fragments";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar />
      <Page style={{ width: 480 }} className="flex-grow-0" padding={12}>
        <div className="flex flex-col gap-6 flex-grow justify-center">
          <h3 className="text-2xl text-center">Sign In</h3>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <Button buttonStyle="primary">Sign In</Button>
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
          <p>Don't Have an Account?</p>
          <Button
            buttonStyle="secondaryAccent"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
          <Button buttonStyle="secondaryAccent">
            <span className="font-bold">NEW!</span> Try Expendee without Account
          </Button>
        </div>
      </Page>
    </>
  );
}
