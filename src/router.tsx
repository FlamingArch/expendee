import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageHome from "./routes/Home";

import "./index.css";
import PageSignIn from "./routes/SignIn";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />}>
          <Route path="/signin" element={<PageSignIn />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
