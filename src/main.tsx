import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import { RouterProvider } from "@tanstack/router";
import router from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
