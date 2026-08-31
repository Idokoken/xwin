import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
import CoinContextProvider from "./context/coin/CoinContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CoinContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </CoinContextProvider>
    </Router>
  </StrictMode>,
);
