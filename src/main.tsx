import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import QuizState from "./context/QuizState";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizState>
        <App />
      </QuizState>
    </BrowserRouter>
  </React.StrictMode>
);
