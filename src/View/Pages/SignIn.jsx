import React from "react";
import Scaffold from "../Components/Scaffold";

const SignIn = ({ signInGoogle }) => {
  return (
    <Scaffold>
      <div className="flex flex-col place-content-center place-items-center w-screen h-screen">
        <h1 className="text-2xl font-serif">EXPENDEE</h1>
        <div className="">
          <div
            onClick={signInGoogle}
            className="bg-black text-white rounded-md shadow-lg px-12 py-2 m-4 hover:scale-105 hover:shadow-xl transition-all"
          >
            Sign in with Google
          </div>
        </div>
      </div>
    </Scaffold>
  );
};

export default SignIn;
