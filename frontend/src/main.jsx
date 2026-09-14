import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
import CoinContextProvider from "./context/coin/CoinContext";
import WalletContextProvider from "./context/wallet/WalletContext";
import WithdrawalContextProvider from "./context/withdrawal/WithdrawalContext";
import OrderContextProvider from "./context/order/OrderContext";
import AssetContextProvider from "./context/asset/AssetContext";
import WatchlistContextProvider from "./context/watchlist/WatchlistContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <WatchlistContextProvider>
        <AssetContextProvider>
          <OrderContextProvider>
            <WithdrawalContextProvider>
              <WalletContextProvider>
                <CoinContextProvider>
                  <AppContextProvider>
                    <App />
                  </AppContextProvider>
                </CoinContextProvider>
              </WalletContextProvider>
            </WithdrawalContextProvider>
          </OrderContextProvider>
        </AssetContextProvider>
      </WatchlistContextProvider>
    </Router>
  </StrictMode>,
);
