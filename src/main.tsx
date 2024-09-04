import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Start } from "./home";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Start />
  </StrictMode>,
);
