import React from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import "./styles.css";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path.startsWith("/work/")) {
    return <ProjectPage slug={decodeURIComponent(path.slice("/work/".length))} />;
  }
  return <HomePage />;
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
