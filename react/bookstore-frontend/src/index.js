import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import "../src/components/Register/register.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./components/layouts/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

reportWebVitals();
