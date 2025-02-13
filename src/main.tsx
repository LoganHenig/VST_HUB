import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/themeContext.tsx";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
if (typeof window !== "undefined") {
  window.global = window;
}
TimeAgo.addDefaultLocale(en)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
