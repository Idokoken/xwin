import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Activity from "./pages/Activity";
import Wallet from "./pages/Wallet";
import PaymentDetails from "./pages/PaymentDetails";
import Withdrawal from "./pages/Withdrawal";
import Profile from "./pages/Profile";
import StockDetails from "./pages/StockDetails";
import Watchlist from "./pages/Watchlist";
import NotFound from "./pages/NotFound";
import SearchCoin from "./others/SearchCoin";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <>
      {/* <Auth /> */}
      {/* {false && ( */}
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/market/:id" element={<StockDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/search" element={<SearchCoin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {/* )} */}
    </>
  );
}

export default App;
