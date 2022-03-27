import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./View/App";

import { TabViewProvider } from "./View/Components/TabBar";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqxGyB-0sD4uD-Fu4BAnih746sBX9F9lo",
  authDomain: "fa-expendee.firebaseapp.com",
  projectId: "fa-expendee",
  storageBucket: "fa-expendee.appspot.com",
  messagingSenderId: "499452967343",
  appId: "1:499452967343:web:2081bfecdd1bfc76c2575a",
};

const app = initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <TabViewProvider>
      <App />
    </TabViewProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
