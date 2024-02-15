import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import counterStore from "./store/Index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
