import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./View/App";
import { TabBarProvider } from "./View/Supporting/TabBar";

ReactDOM.render(
  <React.StrictMode>
    <TabBarProvider>
      <App />
    </TabBarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
