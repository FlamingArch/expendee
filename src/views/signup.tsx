import React, { useEffect, useState } from "react";
import { Button, Page } from "../components";
import { IconApple, IconGoogle, IconMicrosoft } from "../components/Icons";
import { Sidebar } from "../fragments";
import { useNavigate } from "react-router-dom";
import signUpEmail from "../functions/signUpEmail";
import useAppStore from "../contexts/appStore";
import createUserDoc from "../functions/createUserDoc";

export default function SignUp() {
  const navigate = useNavigate();

  const { auth, firestore } = useAppStore((state) => ({
    auth: state.auth,
    firestore: state.firestore,
  }));

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [signedUpNewsletter, setSignedUpNewsletter] = useState(true);
  const [agreeTNC, setAgreeTNC] = useState(false);

  useEffect(
    () =>
      console.log(
        `Agree TNC: ${agreeTNC}, Signed Up Newsletter: ${signedUpNewsletter}`
      ),
    [agreeTNC, signedUpNewsletter]
  );

  const handleOnClick = () => {
    signUpEmail(auth, email, password).then((credentials) => {
      createUserDoc(
        firestore,
        credentials,
        email,
        userName,
        signedUpNewsletter
      ).then(() => navigate("/"));
    });
  };

  return (
    <>
      <Sidebar />
      <Page style={{ width: 480 }} className="flex-grow-0" padding={12}>
        <div className="flex flex-col gap-6 flex-grow justify-center">
          <h3 className="text-2xl text-center">Sign Up</h3>

          <div className="font-bold">Enter your Email</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />

          <div className="font-bold">
            Enter a unique User Name. You can set a display name later.
          </div>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Username"
          />

          <div className="font-bold">Chose a Strong Password</div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <input
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            type="password"
            placeholder="Repeat Password"
          />

          <div className="font-bold">Legalities</div>

          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              checked={agreeTNC}
              onChange={() => setAgreeTNC(!agreeTNC)}
            />
            <p className="highlightLink">
              I agree to the <a href="">Terms and Conditions</a> and{" "}
              <a href="">Privacy Policy</a>
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              checked={signedUpNewsletter}
              onChange={() => setSignedUpNewsletter(!signedUpNewsletter)}
            />
            <p>
              Send me Email about new features and announcements.{" "}
              <span className="font-bold">I can unsubscribe any time.</span>
            </p>
          </div>

          <Button
            buttonStyle="primary"
            onClick={handleOnClick}
            disabled={
              !agreeTNC ||
              !userName ||
              !email ||
              !password ||
              !repeatPassword ||
              !(password === repeatPassword)
            }
          >
            Create Expendee ID
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
