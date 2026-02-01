import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App";

const globalStyles = {
  ":root": {
    colorScheme: "light dark",
    "--bg": "#f6f7fb",
    "--text": "#0f172a",
    "--muted": "#475569",
    "--card": "#ffffff",
    "--card-muted": "#f1f5f9",
    "--border": "rgba(15, 23, 42, 0.12)",
    "--shadow": "0 18px 40px rgba(15, 23, 42, 0.08)",
    "--accent": "#2563eb",
    "--accent-soft": "rgba(37, 99, 235, 0.12)",
    "--accent-contrast": "#ffffff",
    "--tag-bg": "rgba(37, 99, 235, 0.08)",
    "--tag-text": "#1e3a8a",
    "--grid-bg": "#f8fafc",
    "--drawer-bg": "#ffffff",
    "--drawer-text": "#0f172a",
  },
  body: {
    margin: 0,
    fontFamily: "'Pretendard', 'Noto Sans KR', system-ui, sans-serif",
    backgroundColor: "var(--bg)",
    color: "var(--text)",
  },
  "body[data-theme='light']": {
    "--bg": "#f6f7fb",
    "--text": "#0f172a",
    "--muted": "#475569",
    "--card": "#ffffff",
    "--card-muted": "#f1f5f9",
    "--border": "rgba(15, 23, 42, 0.12)",
    "--shadow": "0 18px 40px rgba(15, 23, 42, 0.08)",
    "--accent": "#2563eb",
    "--accent-soft": "rgba(37, 99, 235, 0.12)",
    "--accent-contrast": "#ffffff",
    "--tag-bg": "rgba(37, 99, 235, 0.08)",
    "--tag-text": "#1e3a8a",
    "--grid-bg": "#f8fafc",
    "--drawer-bg": "#ffffff",
    "--drawer-text": "#0f172a",
  },
  "body[data-theme='dark']": {
    "--bg": "#0f172a",
    "--text": "#e2e8f0",
    "--muted": "#94a3b8",
    "--card": "#111827",
    "--card-muted": "#0b1220",
    "--border": "rgba(148, 163, 184, 0.2)",
    "--shadow": "0 24px 50px rgba(15, 23, 42, 0.4)",
    "--accent": "#6366f1",
    "--accent-soft": "rgba(99, 102, 241, 0.18)",
    "--accent-contrast": "#f8fafc",
    "--tag-bg": "rgba(15, 23, 42, 0.6)",
    "--tag-text": "#cbd5f5",
    "--grid-bg": "#0b1220",
    "--drawer-bg": "#0f172a",
    "--drawer-text": "#e2e8f0",
  },
  "*": {
    boxSizing: "border-box",
  },
  "*:focus-visible": {
    outline: "2px solid var(--accent)",
    outlineOffset: "2px",
  },
  "@media (prefers-reduced-motion: reduce)": {
    "*": {
      animation: "none !important",
      transition: "none !important",
      scrollBehavior: "auto !important",
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);
