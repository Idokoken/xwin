import { useState, useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "./pages/Navbar";
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
import Home from "./pages/Home";
import { AppContext } from "./context/AppContext";
import { BASE_URL, api } from "./config/API";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HelpCenter from "./pages/HelpCenter";
import TermAndCondition from "./pages/TermAndCondition";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./others/Footer";
import Header from "./others/Header";
import Services from "./pages/Services";

function App() {
  const { getUser, jwt, user } = useContext(AppContext);
  const jwtFromStorage = localStorage.getItem("jwt");
  useEffect(() => {
    getUser(jwt || jwtFromStorage);
    // console.log(jwt);
  }, [jwt]);

  return (
    <>
      {/* {user == null ? ( */}
      <div className="">
        <Header />
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

          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/terms-conditions" element={<TermAndCondition />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
      )
      {/* : (
       <Auth />
       ) */}
    </>
  );
}

export default App;
