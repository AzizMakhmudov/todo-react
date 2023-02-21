import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Todo/App";
import Title from "./components/Title/Title";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Title />
    <App />
  </React.StrictMode>
);