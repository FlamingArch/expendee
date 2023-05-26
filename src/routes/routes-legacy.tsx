import {
  CompoundInterest,
  Home,
  SignIn,
  SignUp,
  SimpleInterest,
  Split,
} from "../views";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tips from "../views/tips";

const homeRoute = {
  path: "/",
  element: <Home />,
};

const signInRoute = {
  path: "/signin",
  element: <SignIn />,
};

const signUpRoute = {
  path: "/signup",
  element: <SignUp />,
};

const simpleInterestRoute = {
  path: "/simpleInterest",
  element: <SimpleInterest />,
};

const compoundInterestRoute = {
  path: "/compoundInterest",
  element: <CompoundInterest />,
};

const splitRoute = {
  path: "/split",
  element: <Split />,
};

const tipsRoute = {
  path: "/tips",
  element: <Tips />,
};

export default createBrowserRouter([
  homeRoute,
  signInRoute,
  signUpRoute,
  simpleInterestRoute,
  compoundInterestRoute,
  splitRoute,
  tipsRoute,
]);
