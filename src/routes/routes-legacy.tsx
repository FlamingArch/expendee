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
import PageNewTransaction from "../views/newTransaction";
import PageNewWallet from "../views/newWallet";
import PageNewCategory from "../views/newCategory";

const transactionRoute = {
  path: "/transaction/:id",
  element: <Transaction />,
};

const newTransactionRoute = {
  path: "/transaction/new",
  element: <PageNewTransaction />,
};

const homeRoute = {
  path: "/",
  element: <Home />,
  children: [transactionRoute, newTransactionRoute],
};

const newWalletRoute = {
  path: "/wallet/new",
  element: <PageNewWallet />,
};

const newCategoryRoute = {
  path: "/category/new",
  element: <PageNewCategory />,
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
    newWalletRoute,
    newCategoryRoute,
  ],
};

export default createBrowserRouter([appLayout, signInRoute, signUpRoute]);
