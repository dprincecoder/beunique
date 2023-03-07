import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import Layout from "./components/Layout";
import "./index.css";
import { setToken } from "./redux/features/auth/authSlice";
import store, { persistor } from "./redux/store";
import "./styles/globals.css";

const token = sessionStorage.getItem("token");
store.dispatch(setToken(token));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Toaster />
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <App />
          </Layout>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
