import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// Default theme
import "@splidejs/react-splide/css";
import "react-accessible-accordion/dist/fancy-example.css";
import "semantic-ui-css/semantic.min.css";
 import "react-toastify/dist/ReactToastify.css";
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// import '@splidejs/react-splide/css/core';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
