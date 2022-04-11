import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./View/App";

import { TabViewProvider } from "./View/Components/TabBar";


import SignIn from "./View/Pages/SignIn";


ReactDOM.render(
  <React.StrictMode>
    <TabViewProvider>
      <App />
    </TabViewProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
