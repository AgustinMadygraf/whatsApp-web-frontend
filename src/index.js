/*
Path: src/index.js
Este archivo contendrá el componente principal de la aplicación.
*/

import React from "react";
import ReactDOM from "react-dom/client"; // Cambiar a createRoot
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")); // Usar createRoot
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Si quieres medir el rendimiento de tu app:
reportWebVitals();
