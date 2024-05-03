import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FirebaseProvider } from "./context/Firebase";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </Provider>
  </React.StrictMode>
);
