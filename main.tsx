import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h3 className="text-red-500 bg-sky-400 p-4 m-4 font-black outline-red-900 outline-8">TailwindCSS Works!</h3>
  </StrictMode>
);
