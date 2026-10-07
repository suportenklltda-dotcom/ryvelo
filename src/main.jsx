import React from "react";
import { createRoot } from "react-dom/client";
import { ClinicDemo, SalesPage } from "./application.jsx";
import "./styles.css";
const Page = location.pathname.startsWith("/demo") ? ClinicDemo : SalesPage;
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
