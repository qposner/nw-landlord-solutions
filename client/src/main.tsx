import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

// Vite's BASE_URL is "/" for root deploys or "/<repo>/" for GitHub Pages project sites.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById("root")!).render(
  <Router base={base}>
    <App />
  </Router>
);
