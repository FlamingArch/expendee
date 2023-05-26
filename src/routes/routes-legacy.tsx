import {
  CompoundInterest,
  Home,
  SignIn,
  SignUp,
  SimpleInterest,
  Split,
  Transaction,
} from "../views";
import { createBrowserRouter } from "react-router-dom";
import Tips from "../views/tips";
import BaseLayout from "./BaseLayout";

const transactionRoute = {
  path: "/transaction/:id",
  element: <Transaction />,
};

const homeRoute = {
  path: "/",
  element: <Home />,
  children: [transactionRoute],
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
  path: "/si",
  element: <SimpleInterest />,
};

const compoundInterestRoute = {
  path: "/ci",
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

const appLayout = {
  element: <BaseLayout />,
  children: [
    homeRoute,
    simpleInterestRoute,
    compoundInterestRoute,
    tipsRoute,
    splitRoute,
  ],
};

export default createBrowserRouter([appLayout, signInRoute, signUpRoute]);
