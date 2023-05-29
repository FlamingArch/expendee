import React, { useState } from "react";
import { Button, Page } from "../components";
import { IconApple, IconGoogle, IconMicrosoft } from "../components/Icons";
import { Sidebar } from "../fragments";
import { useNavigate } from "react-router-dom";
import signInEmail from "../functions/signInEmail";
import useAppStore from "../contexts/appStore";

export default function SignIn() {
  const navigate = useNavigate();

  const { auth } = useAppStore((state) => ({ auth: state.auth }));

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClick = () => {
    signInEmail(auth, userName, password)
      .then((res) => {
        if (res) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Sidebar />
      <Page style={{ width: 480 }} className="flex-grow-0" padding={12}>
        <div className="flex flex-col gap-6 flex-grow justify-center">
          <h3 className="text-2xl text-center">Sign In</h3>

          <input
            type="email"
            placeholder="Email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            buttonStyle="primary"
            onClick={handleOnClick}
            disabled={!userName || !password}
          >
            Sign In
          </Button>

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
